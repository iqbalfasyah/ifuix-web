import { pageGraph } from '../data/metadata'
import type { SiteRoute } from '../data/site'

export function StructuredData({ route }: { route: SiteRoute }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(pageGraph(route)).replace(/</g, '\\u003c'),
      }}
    />
  )
}
