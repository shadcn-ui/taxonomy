import type { SanityClient } from '@sanity/client'

// updated within the hour, if it's older it'll create a new secret or return null
const query = (ttl) =>
  /* groq */ `*[_id == $id && dateTime(_updatedAt) > dateTime(now()) - ${ttl}][0].secret`

const tag = 'preview.secret'

export async function getSecret(
  client: SanityClient,
  id: `${string}.${string}`,
  createIfNotExists?: true | (() => string)
): Promise<string | null> {
  const secret = await client.fetch<string | null>(
    // Use a TTL of 1 hour when reading the secret, while using a 30min expiry if `createIfNotExists` is defined to avoid a race condition where
    // a preview pane could get a Secret and use it just as it expires. Twice the TTL gives a wide margin to ensure that when the secret is read
    // it's recent enough to be valid no matter if it's used in an iframe URL, or a "Open Preview" URL.
    query(createIfNotExists ? 60 * 30 : 60 * 60),
    { id }
  )
  if (!secret && createIfNotExists) {
    const newSecret =
      createIfNotExists === true
        ? Math.random().toString(36).slice(2)
        : createIfNotExists()
    try {
      const patch = client.patch(id).set({ secret: newSecret })
      await client
        .transaction()
        .createIfNotExists({ _id: id, _type: id })
        .patch(patch)
        .commit({ tag })
      return newSecret
    } catch (err) {
      console.error(
        'Failed to create a new preview secret. Ensure the `client` has a `token` specified that has `write` permissions.',
        err
      )
    }
  }

  return secret
}
