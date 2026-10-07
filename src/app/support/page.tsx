import { Support } from '../../views/Support'
import { pageMetadata } from '../../data/metadata'
import { StructuredData } from '../../components/StructuredData'

export const metadata = pageMetadata('/support')

export default function Page() {
  return (
    <>
      <StructuredData route="/support" />
      <Support />
    </>
  )
}
