module.exports = {
  extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    },
    plugins: ['react']
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      processor: 'astro/client-side-ts', // <- Uses the "client-side-ts" processor.
      rules: {
        // override/add rules settings here, such as:
        'astro/no-set-html-directive': 'error',
        'astro/no-unused-css-selector': 'error'
      }
    }
    // ...
  ]
}
