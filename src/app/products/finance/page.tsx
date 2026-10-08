import { FinanceConcept } from '../../../components/AIProductConcepts'
import { pageMetadata } from '../../../data/metadata'
import { StructuredData } from '../../../components/StructuredData'

export const metadata = pageMetadata('/products/finance')

export default function Page() {
  return (
    <>
      <StructuredData route="/products/finance" />
      <FinanceConcept full />
    </>
  )
}
