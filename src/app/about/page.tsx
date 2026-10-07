import { About } from '../../views/About'
import { pageMetadata } from '../../data/metadata'
import { StructuredData } from '../../components/StructuredData'

export const metadata = pageMetadata('/about')

export default function Page() {
  return (
    <>
      <StructuredData route="/about" />
      <About />
    </>
  )
}
