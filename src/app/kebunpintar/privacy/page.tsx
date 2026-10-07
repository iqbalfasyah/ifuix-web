import { KebunPrivacy } from '../../../views/KebunPrivacy'
import { pageMetadata } from '../../../data/metadata'
import { StructuredData } from '../../../components/StructuredData'

export const metadata = pageMetadata('/kebunpintar/privacy')

export default function Page() {
  return (
    <>
      <StructuredData route="/kebunpintar/privacy" />
      <KebunPrivacy />
    </>
  )
}
