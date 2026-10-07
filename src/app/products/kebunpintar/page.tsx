import { KebunPintar } from '../../../views/KebunPintar'
import { pageMetadata } from '../../../data/metadata'
import { StructuredData } from '../../../components/StructuredData'

export const metadata = pageMetadata('/products/kebunpintar')

export default function Page() {
  return (
    <>
      <StructuredData route="/products/kebunpintar" />
      <KebunPintar />
    </>
  )
}
