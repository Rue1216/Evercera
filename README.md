# 🪨 Evercera

Tech stack:

- Astro
- eslint & prettier
- ui framework

## Init project

- use `pnpm`
- node version: 18.16.1

```=cmd
# install all dependencies
pnpm install

# start project
pnpm run dev

# manually lint files (using prettier & eslint)
pnpm run lint
```

## Env setup records

1.  Git hook: checking for commit

```=cmd
pnpm add --save-dev husky lint-staged # install packages
pnpm exec husky install # husky init
npm pkg set scripts.prepare="husky install" # add script in package.json
pnpm exec husky add .husky/pre-commit "pnpm exec lint-staged"
```

2. Prettier: file formatting

```=cmd
# add prettier
pnpm add -D prettier prettier-plugin-astro

# manually run script to format in cmd
pnpm prettier --write . --plugin=prettier-plugin-astro

# vscode format on save
# add scripts below in your local settings.json
"prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

3. eslint

```=cmd
# install eslint: core/typescript/a11y
pnpm add -D eslint eslint-plugin-astro @typescript-eslint/parser eslint-plugin-jsx-a11y prettier-plugin-astro
```

4. NextUI

```=cmd
# pnpm compatible
public-hoist-pattern[]=*@nextui-org/* # in .npmrc file
pnpm install # check dependencies installed

# install react dependencies
pnpm add @astrojs/react
pnpm add react react-dom

# install next-ui
pnpm add @nextui-org/react framer-motion

# install tailwind
pnpm astro add tailwind
```
