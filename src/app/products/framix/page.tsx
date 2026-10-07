import { Framix } from '../../../views/Framix'
import { pageMetadata } from '../../../data/metadata'
import { StructuredData } from '../../../components/StructuredData'

export const metadata = pageMetadata('/products/framix')

export default function Page() {
  return (
    <>
      <StructuredData route="/products/framix" />
      <Framix />
    </>
  )
}
