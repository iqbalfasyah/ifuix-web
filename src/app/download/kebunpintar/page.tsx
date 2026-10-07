import { KebunDownload } from '../../../views/KebunDownload'
import { pageMetadata } from '../../../data/metadata'
import { StructuredData } from '../../../components/StructuredData'

export const metadata = pageMetadata('/download/kebunpintar')

export default function Page() {
  return (
    <>
      <StructuredData route="/download/kebunpintar" />
      <KebunDownload />
    </>
  )
}
