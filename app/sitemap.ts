import type { MetadataRoute } from 'next'
import { workPages } from '@/content/work'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://j-h.ai/' },
    { url: 'https://j-h.ai/cv' },
    ...workPages.map((item) => ({
      url: `https://j-h.ai/work/${item.page.slug}`,
    })),
    { url: 'https://j-h.ai/york-wines' },
    { url: 'https://j-h.ai/privacy' },
  ]
}
