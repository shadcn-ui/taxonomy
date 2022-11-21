# Taxonomy

An open source application built using the new router, server components and everything new in Next.js 13.

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@shadcn](https://twitter.com/shadcn).
> See the roadmap below.

## Demo

![screenshot-2](https://user-images.githubusercontent.com/124599/198038921-2b16b18b-cb4d-44b1-bd1d-6419d4a8d92c.png)

## About this project

Right now, I'm using this project as an experiment to see how a modern app (with features like authentication, subscriptions, API routes, static pages for docs ...etc) would work in Next.js 13 and server components.

I'll be posting updates and issues here.

A few people have asked me to turn this into a starter. I think we could do that once the new features are out of beta.

## Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups.
- Data fetching, Caching and Mutation.
- Loading UI,
- Server and Client Components.
- API Routes and Middlewares.
- Authentication using **NextAuth.js**.
- ORM using **Prisma**.
- UI Components built using **Radix UI**.
- Documentation and blog using **MDX** and **Contentlayer**
- Subscriptions using **Stripe**
- Styled using **Tailwind CSS**.
- Validations using **Zod**.
- Written in **TypeScript**.

## Roadmap

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@shadcn](https://twitter.com/shadcn).

- [x] ~Add MDX support for basic pages.~
- [x] Build marketing pages
- [x] Subscriptions using Stripe.
- [ ] Responsive styles.
- [ ] Add OG image for blog using @vercel/og.
- [ ] Dark mode.

## Known Issues

A list of things not working right now:

1. ~GitHub authentication (use email)~
2. ~[Prisma: Error: ENOENT: no such file or directory, open '/var/task/.next/server/chunks/schema.prisma'](https://github.com/prisma/prisma/issues/16117)~
3. ~[Next.js 13: Client side navigation does not update head](https://github.com/vercel/next.js/issues/42414)~

## Why not trpc, Turborepo, pnpm or X?

I might add this later. For now, I want to see how far we can get using Next.js only.

If you have some suggestions, feel free to create an issue.

## Running Locally

1. Install dependencies using Yarn:

```sh
yarn
```

2. Copy `.env.example` to `.env.local` and update the variables.

3. Start the development server:

```sh
yarn dev
```

## License

Licensed under the [MIT license](https://github.com/reflexjs/reflex/blob/master/LICENSE).
