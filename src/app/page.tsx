import { Home } from '../views/Home'
import { pageMetadata } from '../data/metadata'
import { StructuredData } from '../components/StructuredData'

export const metadata = pageMetadata('/')

export default function Page() {
  return (
    <>
      <StructuredData route="/" />
      <Home />
    </>
  )
}
