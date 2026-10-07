import { Services } from '../../views/Services'
import { pageMetadata } from '../../data/metadata'
import { StructuredData } from '../../components/StructuredData'

export const metadata = pageMetadata('/services')

export default function Page() {
  return (
    <>
      <StructuredData route="/services" />
      <Services />
    </>
  )
}
