import React from 'react';
import Card from '@/components/card';
import styles from "/styles/Shared.module.css";
import { cache } from 'react'; 
import { previewData } from 'next/headers'
import { PreviewSuspense } from 'components/PreviewSuspense'
import { urlForImage } from 'lib/sanity.image'
import {
  getAllSupportCategories,
  getAllSupportCategorySlugs,
  getSettings,
} from 'lib/sanity.client'


export async function generateStaticParams() {
  console.log('slugs')
  console.log(await getAllSupportCategories() )
  return await getAllSupportCategorySlugs()
}


export default async function SupportCategoryPage({ params, searchParams } : any) {
  // /blog/hello-world => { params: { slug: 'hello-world' } }
  // /blog/hello-world?id=123 => { searchParams: { id: '123' } }
  const settings = getSettings()
  console.log('Support Page')
  console.log(params.slug); 
 
  var categories : any = []; 
  try {
    categories = await getAllSupportCategories();
  } catch (error) { 
    // log an error
  }
    return (<div className='p-4 mt-4 text-white' style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    {categories?.length > 0 ? (
        categories?.map((category: any, index : number) => (

      <Card key={index} 
        title={ category.title } 
        iconUrl={category?.icon ? urlForImage (category.icon).width(1200)
          .height(627)
          .fit('crop')
          .url() : null }
        subText={ category.subText }
        count={ category.count }
        slug={ `/support/` + category.slug} /> 
        ))
        ) : (
        <div>
            <h3>No categories found</h3>
        </div>  )}
    </div>) 
}


// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1