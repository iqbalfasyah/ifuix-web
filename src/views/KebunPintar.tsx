'use client'

import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Volume2,
  WifiOff,
} from 'lucide-react'
import { Link } from '../components/navigation'
import { useTranslation } from 'react-i18next'
import { MediaGallery } from '../components/MediaGallery'
import { PlannedAssistant } from '../components/StudioPresentation'
const screenshots = [
  'home',
  'letters',
  'numbers',
  'activity',
  'garden-preview',
  'train-preview',
]
export const KebunPintar = () => {
  const { t } = useTranslation()
  return (
    <>
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
            <a
              href="#screenshots"
              className="kebun-preview"
              aria-label={t('kebun.enlarge')}
            >
              <img
                src="/images/kebunpintar/home.png"
                width="1200"
                height="800"
                alt={t('kebun.screen0')}
              />
            </a>
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
      <PlannedAssistant product="kebunpintar" />
      <MediaGallery
        screenshots={screenshots.map((name, index) => ({
          src: `/images/kebunpintar/${name}.${name.endsWith('preview') ? 'webp' : 'png'}`,
          label: t(`kebun.screen${index}`),
        }))}
        video="/videos/kebunpintar-preview.mp4"
        poster="/images/kebunpintar/video-poster.webp"
        title={t('kebun.galleryTitle')}
        intro={t('kebun.galleryIntro')}
        videoTitle={t('kebun.videoTitle')}
        videoNote={t('kebun.videoNote')}
      />
      <section className="studio-container kebun-parent">
        <div>
          <span className="eyebrow">{t('kebun.parentBadge')}</span>
          <h2>{t('kebun.parentTitle')}</h2>
          <p>{t('kebun.parentDescription')}</p>
        </div>
        <div className="parent-note">
          <h3>{t('kebun.futureTitle')}</h3>
          <p>{t('kebun.futureDescription')}</p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link to="/download/kebunpintar" className="text-action">
              {t('kebun.installGuide')}
              <ArrowRight size={18} />
            </Link>
            <Link to="/kebunpintar/privacy" className="text-action">
              Kebijakan Privasi &amp; Keamanan Anak
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
