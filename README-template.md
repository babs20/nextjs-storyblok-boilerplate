# Next.js + Storyblok Boilerplate

This is an opionated boilerplate for Next.js and Storyblok. It includes a basic setup for Storyblok and a few other packages to get started working faster.

### Technologies
- [Next.js](https://nextjs.org/)
- [Storyblok](https://www.storyblok.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Sass](https://sass-lang.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [https://localhost:3000](http://localhost:3010) with your browser to see the result.

## Environment Variables

During initialization of the project a `.env.local` file is created with the values inputted into the CLI. This file contains the following variables:

```env
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=
NEXT_PUBLIC_STORYBLOK_SPACE_ID=
```

## Explanation of Technologies


## TypeScript

We are using [TypeScript](https://www.typescriptlang.org/) to add typing to our project. A typical workflow is to create a new component on Storyblok and then generate the types for it. We are using [Storyblok Component Types Generator](https://github.com/dohomi/storyblok-generate-ts) to do this. .To generate the types run:

```bash
npm run generate
```

## Bootstrap

We are using [Bootstrap](https://getbootstrap.com/) as a base for our styling. By default we are using the following optional parts:

- Utilities
- Reboot
- Containers
- Grid
- Helpers


