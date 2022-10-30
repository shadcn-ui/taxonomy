# Taxonomy

An open source application built using the new router, server components and everything new in Next.js 13.

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@shadcn](https://twitter.com). 
> See the roadmap below.

## Demo

![screenshot-2](https://user-images.githubusercontent.com/124599/198038921-2b16b18b-cb4d-44b1-bd1d-6419d4a8d92c.png)


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
- Styled using **Tailwind CSS**.
- Validations using **Zod**.
- Written in **TypeScript**.

## Roadmap

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@shadcn](https://twitter.com).

- [ ] Responsive styles.
- [ ] Subscriptions using Stripe.
- [ ] Add Media Library.
- [ ] Add Pages.
- [ ] Build the front-end for blogs.
- [ ] Add support for custom domains for blogs.
- [ ] Build marketing pages (use a headless CMS?)
- [ ] Add MDX support for basic pages.
- [ ] Add OG image for blog using @vercel/og.
- [ ] Dark mode.

## Known Issues

A list of things not working right now:

1. GitHub authentication (use email)

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
