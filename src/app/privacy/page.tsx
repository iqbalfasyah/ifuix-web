import { Privacy } from '../../views/Privacy'
import { pageMetadata } from '../../data/metadata'
import { StructuredData } from '../../components/StructuredData'

export const metadata = pageMetadata('/privacy')

export default function Page() {
  return (
    <>
      <StructuredData route="/privacy" />
      <Privacy />
    </>
  )
}
