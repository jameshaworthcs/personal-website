import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://j-h.ai/' },
    { url: 'https://j-h.ai/york-wines' },
    { url: 'https://j-h.ai/privacy' },
  ]
}
