import { Contact } from '../../views/Contact'
import { pageMetadata } from '../../data/metadata'
import { StructuredData } from '../../components/StructuredData'

export const metadata = pageMetadata('/contact')

export default function Page() {
  return (
    <>
      <StructuredData route="/contact" />
      <Contact />
    </>
  )
}
