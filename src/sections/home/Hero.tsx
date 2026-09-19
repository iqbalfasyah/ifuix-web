import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export const Hero = () => {
  const { t } = useTranslation()
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
            <a href="#our-products" className="primary-action">
              {t('studio.explore')}
              <ArrowDown size={18} />
            </a>
            <Link to="/about" className="text-action">
              {t('studio.story')}
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="hero-footnote">
            <span>01 — {t('studio.productivity')}</span>
            <span>02 — {t('studio.learning')}</span>
          </div>
        </div>
        <Link to="/products/kebunpintar" className="hero-showcase">
          <div className="showcase-top">
            <span>
              <span className="status-dot" />
              {t('studio.introducing')}
            </span>
            <ArrowUpRight size={22} />
          </div>
          <div className="showcase-screen">
            <img
              src="/images/kebunpintar/home.png"
              width="1200"
              height="800"
              alt={t('studio.kebunpintar.imageAlt')}
              fetchPriority="high"
            />
          </div>
          <div className="showcase-caption">
            <div>
              <span>{t('studio.learning')}</span>
              <strong>Kebun Pintar: Huruf &amp; Angka</strong>
            </div>
            <span className="showcase-round">
              <ArrowUpRight size={23} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
