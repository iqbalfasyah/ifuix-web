import { Download } from '../../../views/Download'
import { pageMetadata } from '../../../data/metadata'
import { StructuredData } from '../../../components/StructuredData'

export const metadata = pageMetadata('/download/fuira')

export default function Page() {
  return (
    <>
      <StructuredData route="/download/fuira" />
      <Download />
    </>
  )
}
