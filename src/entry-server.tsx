import './i18n'
import { renderToPipeableStream, renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import type { ReactNode } from 'react'
import App from './App'
export { seoPages, canonicalUrl, siteOrigin } from './data/site'

export function render(
  route: string,
  assets: { script: string; styles: string[] },
) {
  const Router = ({ children }: { children: ReactNode }) => (
    <StaticRouter location={route}>{children}</StaticRouter>
  )
  const document = (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png?v=2" />
        {assets.styles.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <script type="module" src={assets.script} />
        <noscript>
          <style>
            {
              '[style*="opacity:0"]{opacity:1!important;transform:none!important}'
            }
          </style>
        </noscript>
      </head>
      <body>
        <div id="root" data-prerendered="id">
          <App Router={Router} />
        </div>
      </body>
    </html>
  )
  return new Promise<string>((resolve, reject) => {
    // Resolve lazy routes first, then serialize a complete static document.
    // Streaming a suspended shell can leave content hidden until a reveal script
    // runs, even when piping after onAllReady. Static pages must not need it.
    renderToPipeableStream(document, {
      onAllReady() {
        try {
          resolve(`<!DOCTYPE html>${renderToString(document)}`)
        } catch (error) {
          reject(error)
        }
      },
      onError(error) {
        reject(error)
      },
    })
  })
}
