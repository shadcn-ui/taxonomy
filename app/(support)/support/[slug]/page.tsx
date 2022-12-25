import styles from '/styles/Shared.module.css'
import Accordion from '@/components/accordion'
import { getAllSupportCategoryArticles } from 'lib/sanity.client'
import Link from 'next/link'
import React from 'react'

export default async function SupportPage({ params, searchParams }: any) {
  console.log('Support Page')
  console.log(params.slug)
  var articles: any[] = []
  if (params.slug) {
    articles = await getAllSupportCategoryArticles(params.slug)
  }
  var ca: any[] = []
  articles?.forEach((article: any) => {
    ca.push({
      id: article.slug,
      title: article.title,
      slug: article.slug,
      content: article.content,
    })
  })
  console.log('Modified Articles')
  console.log(ca)
  return (
    <div
      className="p-4 mt-4"
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
    >
      {ca?.length > 0 ? (
        <Accordion items={ca} title={searchParams?.title} />
      ) : (
        <div>Sorry, articles are not available. Please refresh.</div>
      )}
    </div>
  )
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
