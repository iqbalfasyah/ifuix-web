import { ProductDetail } from '../../../views/ProductDetail'
import { pageMetadata } from '../../../data/metadata'
import { StructuredData } from '../../../components/StructuredData'

export const metadata = pageMetadata('/products/fuira')

export default function Page() {
  return (
    <>
      <StructuredData route="/products/fuira" />
      <ProductDetail />
    </>
  )
}
