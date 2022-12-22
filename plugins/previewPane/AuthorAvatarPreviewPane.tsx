import { Card, Flex } from '@sanity/ui'
import AuthorAvatar from 'components/AuthorAvatar'
import type { Author } from 'lib/sanity.queries'

export default function AuthorAvatarPreviewPane(props: Author) {
  const { name, picture } = props
  return (
    <Card padding={6}>
      <Flex justify="center">
        <AuthorAvatar name={name || 'Untitled'} picture={picture} />
      </Flex>
    </Card>
  )
}
