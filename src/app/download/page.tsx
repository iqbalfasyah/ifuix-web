import { Downloads } from '../../views/Downloads'
import { pageMetadata } from '../../data/metadata'
import { StructuredData } from '../../components/StructuredData'

export const metadata = pageMetadata('/download')

export default function Page() {
  return (
    <>
      <StructuredData route="/download" />
      <Downloads />
    </>
  )
}
