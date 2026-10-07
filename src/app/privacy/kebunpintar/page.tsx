import { KebunPrivacy } from '../../../views/KebunPrivacy'
import { pageMetadata } from '../../../data/metadata'
import { StructuredData } from '../../../components/StructuredData'

export const metadata = pageMetadata('/privacy/kebunpintar')

export default function Page() {
  return (
    <>
      <StructuredData route="/privacy/kebunpintar" />
      <KebunPrivacy />
    </>
  )
}
