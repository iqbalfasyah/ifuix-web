import i18n from './i18n'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
const root = document.getElementById('root')!
if (root.dataset.prerendered === 'id' && !i18n.language.startsWith('en')) {
  hydrateRoot(root, app)
} else {
  // A saved English preference or the 404 fallback needs a fresh client render.
  // Remove the initial metadata so React owns exactly one set of route tags.
  document.head
    .querySelectorAll('[data-ifuix-seo]')
    .forEach((tag) => tag.remove())
  createRoot(root).render(app)
}
