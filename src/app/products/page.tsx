import { Products } from '../../views/Products'
import { pageMetadata } from '../../data/metadata'
import { StructuredData } from '../../components/StructuredData'

export const metadata = pageMetadata('/products')

export default function Page() {
  return (
    <>
      <StructuredData route="/products" />
      <Products />
    </>
  )
}
