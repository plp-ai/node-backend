# Quick Start

## 1. Clone repo

clone repo without commit history

```bash
git clone https://github.com/plp-ai/node-backend.git
```

## 2. Install dependencies

```bash
yarn install
```

## 3. Configure your local environment

Copy the .env.example file in this directory to .env.local (which will be ignored by Git):

```bash
cp .env.example .env.local
```

Add details for your Worldcoin application to the .env.local file. Get your env from the [Worldcoin Developer Portal](https://developer.worldcoin.org/).

## 4. Run the development server

```bash
yarn run dev
```

## Available scripts

- `npm run dev` — Starts the application in development mode at.
- `npm run build` — Compile the application.
- `npm start` — Starts the application in production mode.
- `npm run lint` — Check code using ESLint.
- `npm run lint:fix` — Fix autofixable ESLint problem.
- `npm run format:all` — Format code using Prettier for all files.
- `npm run format:check` — Check code format using prettier.
