import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import PostTitle from '@/components/blog/PostTitle'
import { formatDate } from "@/lib/utils"
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <>
    {date && (
      <time dateTime={date} className="block text-sm text-slate-600">
        Published on {formatDate(date)}
      </time>
    )}
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </>
  )
}