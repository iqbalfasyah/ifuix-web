'use client'

import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from '../../components/navigation'
import { useTranslation } from 'react-i18next'
import { products } from '../../data/products'

export const Hero = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const interacting = hovered || focused
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    update()
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    if (!playing || interacting || reducedMotion) return
    const timer = window.setInterval(() => {
      if (!document.hidden)
        setActive((previous) => (previous + 1) % products.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [playing, interacting, reducedMotion])
  const select = (index: number) => {
    setActive((index + products.length) % products.length)
    setPlaying(false)
  }
  return (
    <section className="studio-hero">
      <div className="studio-container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" />
            {t('studio.independent')}
          </span>
          <h1>
            {t('studio.heroLine1')}
            <br />
            <span>{t('studio.heroLine2')}</span>
          </h1>
          <p>{t('studio.heroDescription')}</p>
          <div className="hero-actions">
            <Link to="/products/framix" className="primary-action">
              {t('premium.heroDemo')}
              <ArrowUpRight size={18} />
            </Link>
            <a href="#our-products" className="text-action">
              {t('studio.explore')}
              <ArrowDown size={18} />
            </a>
          </div>
          <p className="hero-availability">{t('premium.heroNote')}</p>
          <div className="hero-footnote">
            <span>01 {t('studio.heroUse1')}</span>
            <span>02 {t('studio.heroUse2')}</span>
            <span>03 {t('studio.heroUse3')}</span>
          </div>
        </div>
        <div
          className={`hero-carousel ${products[active].tone}`}
          role="region"
          aria-roledescription={t('studio.carousel.role')}
          aria-label={t('studio.carousel.label')}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setFocused(false)
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault()
              select(active + (event.key === 'ArrowLeft' ? -1 : 1))
            }
          }}
        >
          <div className="showcase-top">
            <span>{t('premium.showcaseStatus')}</span>
            <span className="carousel-count">
              {String(active + 1).padStart(2, '0')} /{' '}
              {String(products.length).padStart(2, '0')}
            </span>
          </div>
          <div
            id="hero-product-slides"
            aria-live={playing ? 'off' : 'polite'}
            aria-atomic="true"
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                hidden={index !== active}
                role="group"
                aria-roledescription={t('studio.carousel.slide')}
                aria-label={`${index + 1} / ${products.length} · ${product.name}`}
              >
                <Link
                  to={product.detail}
                  className="carousel-product"
                  aria-label={`${t('studio.discover')}: ${product.name}`}
                >
                  <div className="showcase-screen">
                    <img
                      src={product.image}
                      width="1200"
                      height="800"
                      alt={t(`studio.${product.id}.imageAlt`)}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                    />
                  </div>
                  <div className="showcase-caption">
                    <div>
                      <span>
                        {product.platform} ·{' '}
                        {t(`studio.${product.id}.category`)}
                      </span>
                      <strong>{product.name}</strong>
                    </div>
                    <span className="showcase-round">
                      <ArrowUpRight size={23} />
                    </span>
                  </div>
                </Link>
                <p className="carousel-description">
                  {t(`studio.${product.id}.description`)}
                </p>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <div className="carousel-dots">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  className={index === active ? 'active' : ''}
                  onClick={() => select(index)}
                  aria-label={`${t('studio.carousel.show')}: ${product.name}`}
                  aria-pressed={index === active}
                  aria-controls="hero-product-slides"
                >
                  <span />
                  {product.name.split(':')[0]}
                </button>
              ))}
            </div>
            <div className="carousel-buttons">
              {!reducedMotion && (
                <button
                  onClick={() => setPlaying((previous) => !previous)}
                  aria-label={t(
                    playing ? 'studio.carousel.pause' : 'studio.carousel.play',
                  )}
                  aria-controls="hero-product-slides"
                >
                  {playing ? <Pause size={16} /> : <Play size={16} />}
                </button>
              )}
              <button
                onClick={() => select(active - 1)}
                aria-label={t('studio.carousel.previous')}
                aria-controls="hero-product-slides"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                onClick={() => select(active + 1)}
                aria-label={t('studio.carousel.next')}
                aria-controls="hero-product-slides"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
