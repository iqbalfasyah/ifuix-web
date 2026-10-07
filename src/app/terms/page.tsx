import { Terms } from '../../views/Terms'
import { pageMetadata } from '../../data/metadata'
import { StructuredData } from '../../components/StructuredData'

export const metadata = pageMetadata('/terms')

export default function Page() {
  return (
    <>
      <StructuredData route="/terms" />
      <Terms />
    </>
  )
}
