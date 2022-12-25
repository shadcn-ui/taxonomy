// portable text custom components
import { toPlainText } from '@portabletext/react'

var getSlug = require('speakingurl')

export const LinkableH1Header = ({ children, value }) => {
  // `value` is the single Portable Text block of this header
  const slug = getSlug(toPlainText(value))
  return <h1 id={slug}>{children}</h1>
}

export const LinkableH2Header = ({ children, value }) => {
  // `value` is the single Portable Text block of this header
  const slug = getSlug(toPlainText(value))
  return <h2 id={slug}>{children}</h2>
}

export const LinkableH3Header = ({ children, value }) => {
  // `value` is the single Portable Text block of this header
  const slug = getSlug(toPlainText(value))
  return <h3 id={slug}>{children}</h3>
}
export const LinkableH4Header = ({ children, value }) => {
  // `value` is the single Portable Text block of this header
  const slug = getSlug(toPlainText(value))
  return <h4 id={slug}>{children}</h4>
}
