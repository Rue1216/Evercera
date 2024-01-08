# 🪨 Evercera

tech stack:

- Astro
- maybe Vue component(?)
- eslint & prettier

## Env setup records

- Git hook: checking for commit

```=cmd
pnpm add --save-dev husky lint-staged # install packages
pnpm exec husky install # husky init
npm pkg set scripts.prepare="husky install" # add script in package.json
pnpm exec husky add .husky/pre-commit "pnpm exec lint-staged"
```

- Prettier: file formatting

```=cmd
# prettier
pnpm add -D prettier prettier-plugin-astro
# manually run script below to format
pnpm prettier --write . --plugin=prettier-plugin-astro
```
