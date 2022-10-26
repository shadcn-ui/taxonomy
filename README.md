<p align="center">
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
  <br/>
  <h1 align="center">Taxonomy</h1>
	<p align="center">An open source application built using the new router, server components and everything new in Next.js 13.</p>
</p>

> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@shadcn](https://twitter.com).

## Demo

See https://www.youtube.com/watch?v=G5vCj8wWkuc

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

> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@shadcn](https://twitter.com).

- Responsive styles.
- Subscriptions using Stripe.
- Add Media Library.
- Add Pages.
- Build the front-end for blogs.
- Add support for custom domains for blogs.
- Build marketing pages (use a headless CMS?)
- Add MDX support for basic pages.
- Add OG image for blog using @vercel/og.
- Dark mode.

## Issues

A list of things not working for now:

1. GitHub authentication (use email)
2. NextAuth.js middleware (getSession not updated to work with Next.js 13)
3. Returning `notFound()` is resulting in a linting error.

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
