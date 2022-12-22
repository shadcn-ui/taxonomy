import BlogMeta from 'components/BlogMeta'
import MetaDescription from 'components/MetaDescription'
import * as demo from 'lib/demo.data'
import { getSettings } from 'lib/sanity.client'

export default async function PageHead() {
  const {
    title = demo.title,
    description = demo.description,
    ogImage = {},
  } = await getSettings()
  const ogImageTitle = ogImage?.title || demo.ogImageTitle

  return (
    <>
      <title>{title}</title>
      <BlogMeta />
      <MetaDescription value={description} />
      <meta
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/api/og?${new URLSearchParams({ title: ogImageTitle })}`}
      />
    </>
  )
}
