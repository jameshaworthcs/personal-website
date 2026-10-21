import type { ScreenshotName } from './screenshots'

export interface WorkLink {
  label: string
  href: string
}

export interface WorkSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  screenshot?: { name: ScreenshotName; alt: string; caption: string }
}

export interface Work {
  title: string
  // One or two sentences for the home page card
  summary: string
  tags: string[]
  links: WorkLink[]
  // Projects with a page of their own at /work/<slug>
  page?: {
    slug: string
    description: string
    lede: string
    facts: { label: string; value: string }[]
    figures?: { value: string; label: string }[]
    sections: WorkSection[]
  }
}

const countingHouseRepo = 'https://github.com/jameshaworthcs/countinghouse'
const verifiedHandles = 'https://verifiedhandles.org'
const mcpRepo = 'https://github.com/jameshaworthcs/verifiedhandles-mcp'
const mcpDocs = 'https://verifiedhandles.org/developers/mcp'

export const work: Work[] = [
  {
    title: 'Counting House',
    summary:
      'An open-source, local-first personal finance tracker for the UK (50+ stars on GitHub). Statements, CSV exports and screenshots go in; git-versioned JSON comes out.',
    tags: ['TypeScript', 'React', 'Hono'],
    links: [
      { label: 'Project page', href: '/work/counting-house' },
      { label: 'Code', href: countingHouseRepo },
    ],
    page: {
      slug: 'counting-house',
      description:
        'Counting House, an open-source, local-first personal finance tracker for the UK, and the field-level eval behind its import pipeline.',
      lede: 'An open-source, local-first personal finance tracker for the UK (50+ stars on GitHub). Statements, CSV exports and screenshots go in; git-versioned JSON comes out: estate value, spending, tax year and projections.',
      facts: [
        { label: 'Role', value: 'My own open-source project' },
        { label: 'When', value: '09/2026 – Present' },
        { label: 'Stack', value: 'TypeScript, React, Hono' },
        { label: 'Licence', value: 'MIT' },
      ],
      sections: [
        {
          heading: 'The extraction eval',
          paragraphs: [
            'I built an eval that measures, field by field, how well the import pipeline reads synthetic documents: CSV exports, PDF statements and phone screenshots.',
          ],
          bullets: [
            'Claude scored 100% on 36 documents in about 4 minutes.',
            'Local models served through my own llama.cpp gateway scored 99.3% on 40 documents in 5.4 hours.',
          ],
        },
        {
          heading: 'Reading the two scores',
          paragraphs: [
            'They come from different runs on different versions of the eval, so they are not a head-to-head comparison.',
          ],
        },
      ],
    },
  },
  {
    title: 'Rebuilding Verified Handles',
    summary:
      'One TypeScript/PostgreSQL platform in place of MediaWiki, PHP and Python bots. All 591k historical revisions migrated with zero data loss; live since 09/2026.',
    tags: ['TypeScript', 'PostgreSQL', 'Go'],
    links: [
      { label: 'Project page', href: '/work/verified-handles' },
      { label: 'verifiedhandles.org', href: verifiedHandles },
    ],
    page: {
      slug: 'verified-handles',
      description:
        'How James Haworth rebuilt Verified Handles, a directory of 155,000+ public figures and organisations, as one TypeScript/PostgreSQL platform.',
      lede: 'In 2026 I rebuilt Verified Handles as one TypeScript/PostgreSQL platform, replacing MediaWiki, PHP and Python bots, and migrated all 591k historical revisions with zero data loss. It has been live since 09/2026.',
      facts: [
        { label: 'Role', value: 'Founder & Lead Developer' },
        { label: 'When', value: '11/2020 – Present; rebuilt in 2026' },
        { label: 'Stack', value: 'TypeScript, PostgreSQL, Go' },
      ],
      figures: [
        { value: '155,000+', label: 'public figures and organisations' },
        { value: '591k', label: 'historical revisions migrated' },
        { value: '0', label: 'revisions lost' },
      ],
      sections: [
        {
          heading: 'What it is',
          paragraphs: [
            'A public directory of verified social handles for 155,000+ public figures and organisations, nearly all of them linked to Wikidata.',
          ],
          screenshot: {
            name: 'vh-home',
            alt: 'The verifiedhandles.org home page: a search box for 155,736 people and organisations, and a grid of trending entries.',
            caption: 'The verifiedhandles.org home page, 10/2026.',
          },
        },
        {
          heading: 'The problem',
          paragraphs: [
            "The old site was MediaWiki on one server. Each entry's data lived in wikitext templates and was read back by fragile string parsing, and a second copy of the index sat in a separate MySQL table that had to be kept in step with the first. Edits passed through Node, a Python subprocess and a PHP endpoint before reaching the database, new entries came from a Python bot, and search was a substring match on titles.",
            'The data itself was regular: a title, a subtitle, handles and identifiers for each of 155,000 entries. It needed one database, not two stores and a pile of scripts.',
          ],
        },
        {
          heading: 'What I designed',
          paragraphs: [
            "One PostgreSQL database beside a TypeScript application (Hono), which renders HTML on the server. Public pages carry almost no JavaScript: the search bar is about 13 kB and the site script about 18 kB, and the editor's 413 kB loads only when someone presses Edit.",
            'Every field records where its value came from, so the Wikidata sync never overwrites a hand edit. History is kept in three tiers: a verbatim archive of the old wiki, field-level changes from launch on, and an append-only audit log. Search runs in PostgreSQL itself, with trigram and full-text indexes, rather than a separate search service.',
            'The site runs behind Google Project Shield, nginx and Varnish, and pages are purged by surrogate keys when an entry changes. Monitoring is self-hosted: Prometheus, Grafana, Loki and GlitchTip. Measured in 10/2026, a cached entry page answers in a median 56 ms and an uncached one in 70 ms.',
            'I also built JEMEDIA Accounts, the Go OAuth 2.0/OpenID Connect provider behind sign-in.',
          ],
          screenshot: {
            name: 'vh-entry',
            alt: "Netflix's entry on Verified Handles: its description, images from Wikimedia Commons and its official accounts on X.",
            caption: 'An entry page, rendered on the server, 10/2026.',
          },
        },
        {
          heading: 'The migration',
          paragraphs: [
            'The old wiki held 1,602,200 revisions. 1,268,335 were bot counters on user pages, left out by design; the other 590,953, every revision of every entry, were carried over.',
            "Every run of the migration ends in a gate: exact counts of entries and revisions, no revision cut off from its entry, and a re-parse of every page's latest version to check that each subtitle, image, description, handle and Wikidata ID reached the new database. A failure stops the run. Before switching the old server off, I checked that its final dumps matched the migration's source: all 117 tables had the same row counts.",
            'The checks missed one case. Twelve pages were transclusions the migration skipped, so those entries went live empty, though their content was safe in the archive. I found them in 10/2026 and restored them the same day.',
            'The new site went live in 09/2026 by pointing the proxy at the new server. The old one kept running for a week as the way back, then was switched off.',
          ],
        },
        {
          heading: 'How I built it',
          paragraphs: [
            'I designed it, writing the design first in 06/2026, and built it with Claude Code. Since launch, development has run as a pipeline of parallel agents. Each task gets its own clone, database and ports. A worker must reproduce a bug and add a regression test that fails before fixing it. A script, not an agent, merges finished work into staging and re-runs the whole gate: typecheck, lint, build and about 10,000 tests on a fresh database. Nothing reaches production until I approve a release.',
            'In the month after launch that pipeline merged 1,307 tasks and shipped 58 releases.',
          ],
        },
        {
          heading: 'What went wrong, and what I changed',
          paragraphs: [
            "Parallel agents sharing one checkout overwrote each other's work: a git stash mixed up two runs, and a reset deleted a good merge. I moved every run into its own clone and made one script the only thing that writes to staging.",
            "A shared development database hid about 317 integration tests that were silently skipped. Each gate now gets its own throwaway database and fails if it doesn't have one.",
            'One schema migration held a lock for 48 seconds and 16 requests failed. Changes to big tables now follow a separate, expand-then-contract rule.',
            'Moving production to a new server in 10/2026 took the site offline for about 34 minutes, longer than planned: the edge proxy reached the new server over HTTPS, not the HTTP the runbook assumed. The move script now sets up and checks HTTPS before any switch.',
          ],
        },
        {
          heading: 'Since launch',
          paragraphs: [
            "In its first four weeks the new site had six times the Google Search clicks of the old site's last four weeks, from about the same number of impressions.",
          ],
        },
      ],
    },
  },
  {
    title: 'An MCP server for a live directory',
    summary:
      "For running Verified Handles with AI agents: writes are dry runs by default, destructive changes need confirmation, an agent never acts above its user's role, and every write is audited.",
    tags: ['Model Context Protocol'],
    links: [
      { label: 'Project page', href: '/work/verified-handles-mcp' },
      { label: 'Code', href: mcpRepo },
      { label: 'Docs', href: mcpDocs },
    ],
    page: {
      slug: 'verified-handles-mcp',
      description:
        "The Verified Handles MCP server: how AI agents run a live directory without acting above their user's role.",
      lede: 'An MCP server, listed in the MCP Registry, for running the Verified Handles directory with AI agents. I run the live directory with AI agents through it.',
      facts: [
        { label: 'Part of', value: 'Verified Handles' },
        { label: 'When', value: '09/2026 – Present' },
        {
          label: 'Registry name',
          value: 'org.verifiedhandles/verified-handles',
        },
      ],
      sections: [
        {
          heading: 'What it is',
          paragraphs: [
            "An MCP server that lets AI agents read and run the directory through the same routes and permission checks as the website. A tool never touches the database: it sends the app the request a person would, as the key's owner, so an agent can do nothing its owner couldn't do in a browser.",
          ],
        },
        {
          heading: 'The safety model',
          bullets: [
            'Dry runs by default. A write shows the change, the exact request it would send and whether this account may make it, and changes nothing.',
            "Confirmation for destructive changes. Deleting, merging or blocking is refused unless confirm names the exact target the dry run named: the entry's ID, the account's ID, or for a site-wide change the site's own host, so a call written for staging fails on production.",
            "Never above its user's role. A key acts at the lower of its own ceiling and its owner's current role, so demoting someone limits their keys from the next request.",
            'Every write audited, with the key and the tool that made it.',
            'Limits and an off switch. Keys expire within 90 days, requests are rate-limited, and a kill switch takes the site offline.',
          ],
        },
        {
          heading: 'Using it',
          paragraphs: [
            'I run the live directory through it. In 10/2026 a dry run and one confirmed call fixed the Goodreads link template, repairing dead links on 5,624 handles, and an agent merged a duplicate entry after its dry run named the entry to confirm.',
            "The guards hold. When an agent using a key tried to approve a change on staging, it was refused, because keys can't approve changes, and nothing was written.",
          ],
        },
        {
          heading: 'In numbers',
          paragraphs: [
            '190 tests for the MCP layer. 76 releases in its first month, from 1.0.0 in 09/2026 to 1.73.0 in 10/2026. Listed in the MCP Registry since 10/2026.',
          ],
        },
        {
          heading: 'How agents connect',
          paragraphs: [
            "Public reads need no key. Keys can be read-only or capped at a role, and expire within 90 days. Claude, ChatGPT, VS Code and Cursor can sign in with OAuth instead of a key, and there's a Claude Desktop extension.",
          ],
          screenshot: {
            name: 'vh-mcp',
            alt: 'The guide to connecting an agent on verifiedhandles.org: server address, transport, keys and version, then the guides.',
            caption: "The MCP server's guide on verifiedhandles.org, 10/2026.",
          },
        },
      ],
    },
  },
  {
    title: 'York Wines: website and SEO',
    summary:
      'Online shop sales up 30% and website traffic up 20% through SEO, site integrations and UX work. Offered a contract after the internship, then an extension.',
    tags: ['SEO', 'UX'],
    links: [{ label: "The owner's video (43 s)", href: '/york-wines' }],
  },
]

export const workPages = work.flatMap((item) =>
  item.page ? [{ ...item, page: item.page }] : []
)
