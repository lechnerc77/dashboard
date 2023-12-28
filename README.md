# Radius Dashboard

Frontend experience for Project Radius

## Organization

This repo uses [corepack](https://nodejs.org/api/corepack.html) and [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/).

It is organized as a mono-repo.

## Prerequisites

- Install a modern version of [Node.js](https://nodejs.org/en/download). We use v20.X.X but other versions are ok.
- Enable corepack with `corepack enable`.

You'll also want an environment where you can experiment with Radius.

For development, we recommend VS Code. This repo is configured with recommended extensions that can automate parts of the development process when installed.

## Building

**Install dependencies:**

```bash
yarn install
```

**Build all packages:**

```bash
yarn workspaces foreach -A run build:all
```

**Build a specific package**

```bash
# Substitute rad-components with any package name
yarn workspace rad-components run build:all
```

## Scripts

**Run a specific script in a specific package**

```bash
# Substitute rad-components with any package name
# Substitute link with any script name
yarn workspace rad-components run lint
```

## Developing

**Launch Storybook to experiment with rad-components:**

```bash
yarn workspace rad-components run storybook
```

This will launch Storybook at `http://localhost:6006`

## Testing

**Run tests:**

```
yarn run test:all
```

**Run E2E tests:**

```
yarn run test:e2e
```

## Linting

This project is configured to use `eslint` for linting, along with recommended rules for React and TypeScript. This is checked as part of the pull-request process.

**Run the linter manually:**

```
yarn run lint:all
```

## Formatting

This project is configured to use `prettier` for code formatting. This is checked as part of the pull-request process.

**Run the formatter to find violations:**

```
yarn run format:check
```

**Run the formatter to automatically fix violations:**

```
yarn run format:write
```
