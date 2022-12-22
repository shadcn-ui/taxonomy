import { toPlainText } from '@portabletext/react'

export default function MetaDescription({ value }: { value: any[] }) {
  return (
    <meta key="description" name="description" content={toPlainText(value)} />
  )
}
