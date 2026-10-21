// Checks the site's facts against the CV's LaTeX source before a CV goes out.
// usage: npm run check:cv [-- path/to/resume.tex]   (default ../resume/resume.tex)
//
// Errors: content/cv.ts must hold the CV word for word, in both directions.
// app/cv/page.tsx must render the CV's section headings, in the same order.
// Warnings: every figure and MM/YYYY date elsewhere in content/ should appear
// in the CV (the Earlier list and residentials are expected to differ).
import { readFile } from 'node:fs/promises'
import {
  cvEducation,
  cvExperience,
  cvLinks,
  cvProjects,
} from '../content/cv.ts'
import { skills } from '../content/skills.ts'

const texPath = process.argv[2] ?? process.env.CV_TEX ?? '../resume/resume.tex'

let tex
try {
  tex = await readFile(texPath, 'utf8')
} catch {
  console.error(`Can't read ${texPath}; pass the path to resume.tex`)
  process.exit(2)
}
// Only the page itself, not the preamble's command definitions
tex = tex.slice(tex.indexOf('\\begin{document}'))

// The LaTeX the CV uses, turned into the plain text the site shows
function plain(latex) {
  // LaTeX comments first; \% is a literal percent sign
  let s = latex.replace(/(?<!\\)%[^\n]*/g, '')
  for (let i = 0; i < 3; i++) {
    s = s.replace(/\\href\{[^}]*\}\{([^{}]*)\}/g, '$1')
    s = s.replace(
      /\\(?:uline|underline|textbf|textit|emph|small)\{([^{}]*)\}/g,
      '$1'
    )
  }
  return s
    .replace(/\\ifdefined\\cvpublic\\else[^]*?\\fi/g, '')
    .replace(/``/g, '“')
    .replace(/''/g, '”')
    .replace(/\$\|\$/g, '|')
    .replace(/\\([%&$#_])/g, '$1')
    .replace(/~/g, ' ')
    .replace(/ -- /g, ' – ')
    .replace(/\\small\s*/g, '')
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
    const args = []
    let i = match.index + match[0].length
    for (;;) {
      while (/\s/.test(tex[i])) i++
      if (tex[i] !== '{') break
      let depth = 0
      const start = i
      for (; i < tex.length; i++) {
        if (tex[i] === '{') depth++
        else if (tex[i] === '}' && --depth === 0) break
      }
      args.push(plain(tex.slice(start + 1, i)))
      i++
    }
    found.push(args)
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

const siteStrings = []
for (const entry of [...cvEducation, ...cvExperience]) {
  siteStrings.push(entry.organisation, entry.place)
  for (const role of entry.roles) {
    siteStrings.push(role.title, role.period, ...role.bullets)
  }
  siteStrings.push(...(entry.bullets ?? []))
}
for (const project of cvProjects) siteStrings.push(...project.bullets)

const errors = []
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
