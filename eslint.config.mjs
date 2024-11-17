import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: true,
  },
}).overrideRules({
  '@typescript-eslint/no-explicit-any': 'warn',
})
