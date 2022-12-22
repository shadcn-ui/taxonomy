import { Card } from '@sanity/ui'
import { height, OpenGraphImage, width } from 'components/OpenGraphImage'
import { createIntlSegmenterPolyfill } from 'intl-segmenter-polyfill'
import type { Settings } from 'lib/sanity.queries'
import React, { cache, use, useMemo } from 'react'
import _satori, { type SatoriOptions } from 'satori'
import styled from 'styled-components'

const init = cache(async function init(): Promise<SatoriOptions['fonts']> {
  if (!globalThis?.Intl?.Segmenter) {
    console.debug('Polyfilling Intl.Segmenter')
    //@ts-expect-error
    globalThis.Intl = globalThis.Intl || {}
    //@ts-expect-error
    globalThis.Intl.Segmenter = await createIntlSegmenterPolyfill(
      fetch(new URL('public/break_iterator.wasm', import.meta.url))
    )
  }

  const fontData = await fetch(
    new URL('public/Inter-Bold.woff', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return [{ name: 'Inter', data: fontData, style: 'normal', weight: 700 }]
})

const OpenGraphSvg = styled(Card).attrs({
  radius: 3,
  shadow: 1,
  overflow: 'hidden',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
    object-fit: cover;
    aspect-ratio: ${width} / ${height};
    object-position: center;
    height: 100%;
    width: 100%;
  }
`

const satori = cache(_satori)

export default function OpenGraphPreview(props: Settings['ogImage']) {
  const fonts = use(init())

  const __html = use(
    satori(
      useMemo(
        () => <OpenGraphImage title={props.title || ''} />,
        [props.title]
      ),
      useMemo(() => ({ width, height, fonts }), [fonts])
    )
  )

  return <OpenGraphSvg dangerouslySetInnerHTML={{ __html }} />
}
