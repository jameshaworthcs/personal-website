// Written by scripts/screenshots.mjs; run `npm run screenshots` to update
export const screenshots = {
  'vh-home': {
    width: 3840,
    height: 2400,
    widths: [480, 960, 1440, 1920, 2880, 3840],
    placeholder:
      'data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAgCdASoYAA8APu1kqU2ppaOiMAgBMB2JaQAAeyAA/vCsdDAojtg1XfIa6RzYoAA=',
  },
  'vh-entry': {
    width: 3840,
    height: 2400,
    widths: [480, 960, 1440, 1920, 2880, 3840],
    placeholder:
      'data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAAAQAwCdASoYAA8APu1yrU+pp6QiMAgBMB2JaQABM9lz9uAA/vl0obg/ixGYTJF2kkXHtuioQCgbACqYOMQAAA==',
  },
  'vh-mcp': {
    width: 3840,
    height: 2400,
    widths: [480, 960, 1440, 1920, 2880, 3840],
    placeholder:
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAgCdASoYAA8APu1kqU2ppaQiMAgBMB2JaQAAeyAA/vBJFiDeUAG1j21cgAAA',
  },
} as const

export type ScreenshotName = keyof typeof screenshots
