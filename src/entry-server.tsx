/// <reference types="node" />
import './i18n'
import { renderToPipeableStream } from 'react-dom/server'
import { Writable } from 'node:stream'
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
  return new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = []
    const output = new Writable({
      write(chunk, _encoding, next) {
        chunks.push(Buffer.from(chunk))
        next()
      },
      final(next) {
        resolve(Buffer.concat(chunks).toString('utf8'))
        next()
      },
    })
    const stream = renderToPipeableStream(
      <html lang="id">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
      </html>,
      {
        onAllReady() {
          stream.pipe(output)
        },
        onError(error) {
          reject(error)
        },
      },
    )
    output.on('error', reject)
  })
}
