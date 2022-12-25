import Avatar from 'components/AuthorAvatar'
import { urlForImage } from 'lib/sanity.image'
import type { Post } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/lib/utils'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <article className="group relative flex flex-col space-y-2">
        {coverImage && (
          <Image
            src={urlForImage(coverImage).height(1000).width(2000).url()}
            alt={title}
            width={804}
            height={452}
            className="rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
            priority={false}
          />
        )}
        <h2 className="text-2xl font-extrabold">{title}</h2>
        {excerpt && <p className="text-slate-600">{excerpt}</p>}
        {date && <p className="text-sm text-slate-600">{formatDate(date)}</p>}
        <Link href={`/blog/${slug}`} className="absolute inset-0">
          <span className="sr-only">View Article</span>
        </Link>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </article>
    </div>
  )
}
