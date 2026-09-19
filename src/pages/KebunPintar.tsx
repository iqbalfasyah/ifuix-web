import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Volume2,
  WifiOff,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SEO } from '../components/seo/SEO'
const screenshots = ['home', 'letters', 'numbers', 'activity']
export const KebunPintar = () => {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const close = () => {
      document.body.style.overflow = ''
    }
    const element = dialog.current
    element?.addEventListener('close', close)
    return () => {
      element?.removeEventListener('close', close)
      close()
    }
  }, [])
  const openImage = (index: number) => {
    setSelected(index)
    dialog.current?.showModal()
    document.body.style.overflow = 'hidden'
  }
  return (
    <>
      <SEO
        title="Kebun Pintar: Huruf & Angka | IFUIX"
        description={t('kebun.description')}
        url="https://ifuix.com/products/kebunpintar"
        image="https://ifuix.com/images/kebunpintar/home.png"
      />
      <section className="kebun-hero">
        <div className="studio-container">
          <Link className="back-link" to="/products">
            <ArrowLeft size={16} />
            {t('studio.allProducts')}
          </Link>
          <div className="kebun-hero-layout">
            <div>
              <span className="eyebrow">{t('kebun.badge')}</span>
              <img
                className="app-icon"
                src="/images/kebunpintar/icon.png"
                width="72"
                height="72"
                alt=""
              />
              <h1>
                {t('kebun.title')}
                <br />
                <span>{t('kebun.titleAccent')}</span>
              </h1>
              <p>{t('kebun.description')}</p>
              <div className="hero-actions">
                <Link
                  to="/download/kebunpintar"
                  className="primary-action garden-action"
                >
                  <ArrowDownToLine size={18} />
                  {t('kebun.download')}
                </Link>
                <a href="#screenshots" className="text-action">
                  {t('kebun.seeInside')}
                  <ArrowRight size={18} />
                </a>
              </div>
              <p className="small-note">{t('kebun.platformNote')}</p>
            </div>
            <button
              className="kebun-preview"
              onClick={() => openImage(0)}
              aria-label={t('kebun.enlarge')}
            >
              <img
                src="/images/kebunpintar/home.png"
                width="1200"
                height="800"
                alt={t('kebun.screen0')}
              />
            </button>
          </div>
        </div>
      </section>
      <div className="studio-container">
        <div className="activation-note">
          <h3>{t('install.trialTitle')}</h3>
          <p>{t('install.trialDescription')}</p>
          <a
            href="https://wa.me/6285211225262"
            target="_blank"
            rel="noopener noreferrer"
            className="text-action"
          >
            {t('install.activation')}
          </a>
        </div>
      </div>
      <section className="studio-container kebun-features">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('kebun.approach')}</span>
            <h2>{t('kebun.featuresTitle')}</h2>
          </div>
          <p>{t('kebun.featuresIntro')}</p>
        </div>
        <div className="values-grid">
          {[BookOpen, Volume2, WifiOff].map((Icon, i) => (
            <div key={i}>
              <Icon size={25} strokeWidth={1.7} />
              <h3>{t(`kebun.feature${i}Title`)}</h3>
              <p>{t(`kebun.feature${i}Description`)}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="screenshots" className="screenshot-section">
        <div className="studio-container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{t('kebun.realScreens')}</span>
              <h2>{t('kebun.galleryTitle')}</h2>
            </div>
            <p>{t('kebun.galleryIntro')}</p>
          </div>
          <div className="screenshot-grid">
            {screenshots.map((name, i) => (
              <figure key={name}>
                <button
                  onClick={() => openImage(i)}
                  aria-label={`${t('kebun.enlarge')}: ${t(`kebun.screen${i}`)}`}
                >
                  <img
                    src={`/images/kebunpintar/${name}.png`}
                    alt={t(`kebun.screen${i}`)}
                    width="1200"
                    height="800"
                    loading="lazy"
                  />
                </button>
                <figcaption>
                  <span>0{i + 1}</span>
                  {t(`kebun.screen${i}`)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="studio-container kebun-parent">
        <div>
          <span className="eyebrow">{t('kebun.parentBadge')}</span>
          <h2>{t('kebun.parentTitle')}</h2>
          <p>{t('kebun.parentDescription')}</p>
        </div>
        <div className="parent-note">
          <h3>{t('kebun.futureTitle')}</h3>
          <p>{t('kebun.futureDescription')}</p>
          <Link to="/download/kebunpintar" className="text-action">
            {t('kebun.installGuide')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <dialog
        ref={dialog}
        className="screenshot-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close()
        }}
        aria-label={t('kebun.galleryTitle')}
      >
        <button
          className="dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label={t('studio.close')}
        >
          <X size={22} />
        </button>
        <img
          src={`/images/kebunpintar/${screenshots[selected]}.png`}
          alt={t(`kebun.screen${selected}`)}
        />
        <p>{t(`kebun.screen${selected}`)}</p>
      </dialog>
    </>
  )
}
