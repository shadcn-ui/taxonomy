import supportCategoryType from './supportCategory'
import { HiOutlineLifebuoy } from 'react-icons/hi2'
import { defineField, defineType } from 'sanity'

/**
 * This file is the schema definition for a article.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a article in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'support',
  title: 'Support',
  icon: HiOutlineLifebuoy,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: supportCategoryType.name }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      date: 'date',
      media: 'image',
    },
    prepare({ title, media, category }) {
      console.log(category)
      const subtitles = [category && `in ${category.title}`].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
