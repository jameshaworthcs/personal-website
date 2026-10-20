import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
  {
    ignores: ['.next/', 'out/', 'next-env.d.ts'],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      '@next/next/no-img-element': 'off',
      // Links go through <A>, which adds rel="nofollow" to off-site links
      'react/forbid-elements': [
        'error',
        { forbid: [{ element: 'a', message: 'use <A> from @/components/a' }] },
      ],
    },
  },
]

export default config
