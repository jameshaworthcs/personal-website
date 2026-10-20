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
    tags: ['TypeScript', 'React', 'Hono', 'Go'],
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
        { label: 'Stack', value: 'TypeScript, React, Hono, Go' },
        { label: 'Licence', value: 'MIT' },
      ],
      sections: [
        {
          heading: 'The extraction eval',
          paragraphs: [
            'I built an eval that measures, field by field, how well the import pipeline reads synthetic documents: CSV exports, PDF statements and phone screenshots.',
          ],
          bullets: [
            'Claude Sonnet scored 100% on 28 cases for $1.04.',
            'On a later, 41-case version, local models served through my own llama.cpp gateway scored 99.1% at no API cost.',
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
            'A public directory of verified social handles for 155,000+ public figures and organisations, 153,000+ of them linked to Wikidata.',
          ],
          screenshot: {
            name: 'vh-home',
            alt: 'The verifiedhandles.org home page: a search box for 155,736 people and organisations, and a grid of trending entries.',
            caption: 'The verifiedhandles.org home page, 10/2026.',
          },
        },
        {
          heading: 'What I designed',
          paragraphs: [
            'The site, its architecture, its hosting and its monitoring: production and staging behind Google Project Shield, nginx and Varnish; Prometheus, Grafana and Loki for metrics, logs and alerts; daily backups and moderated editing.',
            'I also built JEMEDIA Accounts, the Go OAuth 2.0/OpenID Connect provider behind sign-in.',
          ],
          screenshot: {
            name: 'vh-entry',
            alt: "Netflix's entry on Verified Handles: its description, images from Wikimedia Commons and its official accounts on X.",
            caption: 'An entry page, rendered on the server, 10/2026.',
          },
        },
        {
          heading: 'How I built it',
          paragraphs: [
            'With parallel Claude Code agents, each in its own clone, with every change gated by tests and staging before release.',
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
        {
          label: 'Registry name',
          value: 'org.verifiedhandles/verified-handles',
        },
      ],
      sections: [
        {
          heading: 'The safety model',
          bullets: [
            'Writes are dry runs by default.',
            'Destructive changes need confirmation.',
            "An agent never acts above its user's role.",
            'Every write is audited.',
          ],
        },
        {
          heading: 'How agents connect',
          paragraphs: [
            "Public reads need no key. A read-only key, or a key with a role ceiling, limits what an agent can do. Claude, ChatGPT, VS Code and Cursor can sign in with OAuth instead of a key, and there's a Claude Desktop extension.",
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
