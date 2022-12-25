'use client'

import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import type { FC } from 'react'
import { HiChevronDown } from 'react-icons/hi2'
import { HiArrowLeft } from 'react-icons/hi2'

interface AccordionProps {
  title: string
  items: any
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
const Accordion: FC<AccordionProps> = ({ title, items }) => (
  <div className="bg-gray-50 p-4">
    <Link href="/support">
      <button type="button" className="inline-flex items-center">
        <HiArrowLeft
          className="-ml-1 mr-2 h-5 w-5 relative inline-flex items-center"
          aria-hidden="true"
        />{' '}
        Back{' '}
      </button>
    </Link>
    <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>

        <div className="mt-6 space-y-6 divide-y divide-gray-200">
          {items.map((item: any) => (
            <Disclosure as="div" key={item.slug} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                      <span className="font-medium text-gray-900">
                        {item.title}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <HiChevronDown
                          className={classNames(
                            open ? '-rotate-180' : 'rotate-0',
                            'h-6 w-6 transform'
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{item.content}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Accordion
