// Checks the site's facts against the CV's LaTeX source before a CV goes out.
// usage: npm run check:cv [-- path/to/resume.tex]   (default ../resume/resume.tex)
//
// Errors: content/cv.ts must hold the two-page CV word for word, in both
// directions.
// app/cv/page.tsx must render the CV's section headings, in the same order.
// Warnings: every figure and MM/YYYY date elsewhere in content/ should appear
// in the CV (the Earlier list and residentials are expected to differ).
import { readFile } from 'node:fs/promises'
import {
  cvActivities,
  cvCertificates,
  cvEducation,
  cvExperience,
  cvLinks,
  cvProjects,
} from '../content/cv.ts'
import { profile } from '../content/profile.ts'
import { skills } from '../content/skills.ts'

const texPath = process.argv[2] ?? process.env.CV_TEX ?? '../resume/resume.tex'

let tex
try {
  tex = await readFile(texPath, 'utf8')
} catch {
  console.error(`Can't read ${texPath}; pass the path to resume.tex`)
  process.exit(2)
}
// The brace-balanced arguments that start at s[i] (at most max of them), as
// they are in the source, and the index just after the last one
function rawArgs(s, i, max = Infinity) {
  const args = []
  while (args.length < max) {
    while (/\s/.test(s[i])) i++
    if (s[i] !== '{') break
    let depth = 0
    const start = i
    for (; i < s.length; i++) {
      if (s[i] === '{') depth++
      else if (s[i] === '}' && --depth === 0) break
    }
    args.push(s.slice(start + 1, i))
    i++
  }
  return { args, end: i }
}

// The two-page CV, as a plain ./build.sh makes it: the \else side of each
// \ifonepage, the second argument of each \cvpick and the text of each \twopage
function twoPage(s) {
  s = s.replace(
    /\\ifonepage(?![a-zA-Z])([^]*?)\\fi(?![a-zA-Z])/g,
    (match, body) => body.split(/\\else(?![a-zA-Z])/)[1] ?? ''
  )
  // From the last one back, so that one inside another's argument goes first
  for (;;) {
    const at = Math.max(s.lastIndexOf('\\cvpick'), s.lastIndexOf('\\twopage'))
    if (at < 0) return s
    const pick = s.startsWith('\\cvpick', at)
    const { args, end } = rawArgs(
      s,
      at + (pick ? '\\cvpick' : '\\twopage').length,
      pick ? 2 : 1
    )
    s = s.slice(0, at) + (pick ? args[1] : args[0]) + s.slice(end)
  }
}

// The title line's defaults, e.g. \providecommand{\cvlocation}{York, UK}
const defaults = new Map(
  [...tex.matchAll(/\\providecommand\{\\(cv\w+)\}\{([^{}]*)\}/g)].map(
    ([, name, value]) => [name, value]
  )
)
// Only the page itself, not the preamble's command definitions, with the
// defaults filled in as a plain ./build.sh would
tex = twoPage(tex.slice(tex.indexOf('\\begin{document}')))
  .replace(/\\ifx\\(cv\w+)\\empty\\else([^]*?)\\fi/g, (match, name, body) =>
    defaults.get(name) ? body : ''
  )
  .replace(/\\(cv\w+)(?![a-zA-Z])(?:\{\})?/g, (match, name) =>
    defaults.has(name) ? defaults.get(name) : match
  )

// The LaTeX the CV uses, turned into the plain text the site shows
function plain(latex) {
  // LaTeX comments first; \% is a literal percent sign
  let s = latex
    .replace(/(?<!\\)%[^\n]*/g, '')
    .replace(/\\(?:small|cvsize)(?![a-zA-Z])\s*/g, '')
  for (let i = 0; i < 3; i++) {
    s = s.replace(/\\href\{[^}]*\}\{([^{}]*)\}/g, '$1')
    s = s.replace(
      /\\(?:uline|underline|textbf|textit|emph|small)\{([^{}]*)\}/g,
      '$1'
    )
  }
  // The public copy: \cvpublic is defined (no phone number), and no other
  // build flag is, so ./build.sh --ai's "ideally in applied AI" is left out
  return s
    .replace(
      /\\ifdefined\\(cv\w+)(?![a-zA-Z])([^]*?)\\fi/g,
      (match, name, body) => {
        const [then, otherwise = ''] = body.split(/\\else(?![a-zA-Z])/)
        return name === 'cvpublic' ? then : otherwise
      }
    )
    .replace(/``/g, '“')
    .replace(/''/g, '”')
    .replace(/\$\|\$/g, '|')
    .replace(/\\([%&$#_])/g, '$1')
    .replace(/~/g, ' ')
    .replace(/ -- /g, ' – ')
    .replace(/\\\\/g, ' ')
    .replace(/\\vspace\{[^}]*\}/g, '')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// Every brace-balanced argument of \command{…}{…}… in the source
function argsOf(command) {
  const found = []
  const re = new RegExp(`\\\\${command}\\b`, 'g')
  let match
  while ((match = re.exec(tex))) {
    found.push(rawArgs(tex, match.index + match[0].length).args.map(plain))
  }
  return found
}

const cvStrings = new Set([
  ...argsOf('resumeItem').map(([text]) => text),
  ...argsOf('resumeSubheading').flat(),
  ...argsOf('resumeSubSubheading').flat(),
  ...argsOf('resumeTwoRoleSubheading').flat(),
])
const texText = plain(tex)

const errors = []

// The header /cv renders: the title line and the summary under the contacts
const titleLine = `${profile.role} | Available ${profile.available} | ${profile.location}`
for (const text of [titleLine, profile.summary]) {
  if (!texText.includes(text)) errors.push(`Header differs: ${text}`)
}

const siteStrings = []
for (const entry of [...cvEducation, ...cvExperience]) {
  siteStrings.push(entry.organisation, entry.place)
  for (const role of entry.roles) {
    siteStrings.push(role.title, role.period, ...role.bullets)
  }
  siteStrings.push(...(entry.bullets ?? []))
}
for (const project of cvProjects) siteStrings.push(...project.bullets)
siteStrings.push(...cvActivities)

for (const text of siteStrings) {
  if (!cvStrings.has(text) && !texText.includes(text)) {
    errors.push(`On the site, not in the CV: ${text}`)
  }
}
const siteSet = new Set(siteStrings)
for (const [text] of argsOf('resumeItem')) {
  if (!siteSet.has(text)) errors.push(`In the CV, not on the site: ${text}`)
}
for (const skill of skills) {
  if (!texText.includes(`${skill.group}: ${skill.items}`)) {
    errors.push(`Skills line differs: ${skill.group}: ${skill.items}`)
  }
}

// Each project's heading: name | stack, then the link on the right
const cvProjectHeadings = argsOf('resumeProjectHeading').map(
  ([heading, link]) => `${heading} / ${link}`
)
const siteProjectHeadings = cvProjects.map(
  (project) => `${project.name} | ${project.stack} / ${project.link.label}`
)
for (const heading of siteProjectHeadings) {
  if (!cvProjectHeadings.includes(heading))
    errors.push(`Project heading on the site, not in the CV: ${heading}`)
}
for (const heading of cvProjectHeadings) {
  if (!siteProjectHeadings.includes(heading))
    errors.push(`Project heading in the CV, not on the site: ${heading}`)
}

// Courses & Awards: a row per certificate, bold name, an optional | and
// italic issuer, and the date on the right
const cvCertificateRows = [
  ...tex.matchAll(
    /\\textbf\{([^{}]*)\}(?:\s*\$\|\$\s*\\emph\{([^{}]*)\})?\s*&\s*\\cvsize\s*(\d{2}\/\d{4})/g
  ),
].map(([, name, issuer, date]) =>
  [plain(name), issuer && plain(issuer), date].filter(Boolean).join(' | ')
)
const siteCertificateRows = cvCertificates.map((certificate) =>
  [certificate.name, certificate.issuer, certificate.date]
    .filter(Boolean)
    .join(' | ')
)
for (const row of siteCertificateRows) {
  if (!cvCertificateRows.includes(row))
    errors.push(`Certificate on the site, not in the CV: ${row}`)
}
for (const row of cvCertificateRows) {
  if (!siteCertificateRows.includes(row))
    errors.push(`Certificate in the CV, not on the site: ${row}`)
}

// The links in the CV's bullets are the ones /cv adds to them
const cvItemLinks = new Map()
for (const item of tex.match(/\\resumeItem\{.*/g) ?? []) {
  for (const [, href, label] of item.matchAll(
    /\\href\{([^}]*)\}\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g
  )) {
    cvItemLinks.set(plain(label), href)
  }
}
for (const [label, href] of cvItemLinks) {
  if (cvLinks[label] !== href) {
    errors.push(
      `Link differs: ${label} goes to ${href} in the CV, ${cvLinks[label] ?? 'nowhere'} on the site`
    )
  }
}
for (const label of Object.keys(cvLinks)) {
  if (!cvItemLinks.has(label))
    errors.push(`Linked on the site, not in the CV: ${label}`)
}

// The section headings /cv renders, in order, are the CV's \section{…}s
const page = await readFile(
  new URL('../app/cv/page.tsx', import.meta.url),
  'utf8'
)
const siteHeadings = [...page.matchAll(/<CvSection\b([^>]*)>/g)].map(
  ([tag, attrs]) =>
    attrs.match(/\btitle="([^"]*)"/)?.[1] ??
    `(no plain title in app/cv/page.tsx: ${tag})`
)
const cvHeadings = argsOf('section').map(([title]) => title)
if (siteHeadings.join('\n') !== cvHeadings.join('\n')) {
  errors.push(
    `Section headings differ:\n           CV:   ${cvHeadings.join(' / ')}\n           site: ${siteHeadings.join(' / ')}`
  )
}

// Figures and dates anywhere in content/ should be backed by the CV
const warnings = []
const content = await Promise.all(
  ['profile', 'experience', 'education', 'work'].map((name) =>
    readFile(new URL(`../content/${name}.ts`, import.meta.url), 'utf8')
  )
)
const facts = new Set(
  content.join('\n').match(/\b\d{2}\/\d{4}\b|\d[\d,.]*(?:k|\+|%)/g)
)
for (const fact of facts) {
  if (!texText.includes(fact)) warnings.push(`Not in the CV: ${fact}`)
}

for (const line of warnings) console.warn(`warning  ${line}`)
for (const line of errors) console.error(`error    ${line}`)
console.log(
  errors.length
    ? `\n${errors.length} difference(s) between /cv and ${texPath}`
    : `/cv matches ${texPath}`
)
process.exit(errors.length ? 1 : 0)
