import { Faq } from '../../views/Faq'
import { pageMetadata } from '../../data/metadata'
import { StructuredData } from '../../components/StructuredData'

export const metadata = pageMetadata('/faq')

export default function Page() {
  return (
    <>
      <StructuredData route="/faq" />
      <Faq />
    </>
  )
}
