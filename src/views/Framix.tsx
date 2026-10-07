'use client'

import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Scissors,
  Captions,
  HardDrive,
} from 'lucide-react'
import { Link } from '../components/navigation'
import { useTranslation } from 'react-i18next'
import { MediaGallery } from '../components/MediaGallery'
import { framixContact } from '../data/site'

export const Framix = () => {
  const { t } = useTranslation()
  return (
    <>
      <section className="framix-hero">
        <div className="studio-container">
          <Link className="back-link" to="/products">
            <ArrowLeft size={16} />
            {t('studio.allProducts')}
          </Link>
          <div className="framix-hero-layout">
            <div>
              <span className="eyebrow">
                FRAMIX BY IFUIX · FRAME IT. MIX IT.
              </span>
              <h1>
                Framix Editor<span>{t('framix.titleAccent')}</span>
              </h1>
              <p>{t('framix.description')}</p>
              <div className="hero-actions">
                <a
                  href={framixContact}
                  className="primary-action framix-action"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  {t('framix.contact')}
                </a>
                <a href="#screenshots" className="text-action">
                  {t('framix.seeDemo')}
                  <ArrowRight size={18} />
                </a>
              </div>
              <p className="small-note">{t('framix.availability')}</p>
            </div>
            <a href="#screenshots" className="framix-preview">
              <img
                src="/images/framix/editor.webp"
                alt={t('framix.screen0')}
                width="1440"
                height="900"
                fetchPriority="high"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="studio-container kebun-features">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('framix.featuresBadge')}</span>
            <h2>{t('framix.featuresTitle')}</h2>
          </div>
          <p>{t('framix.featuresIntro')}</p>
        </div>
        <div className="values-grid">
          {[Scissors, Captions, HardDrive].map((Icon, index) => (
            <div key={index}>
              <Icon size={25} strokeWidth={1.7} />
              <h3>{t(`framix.feature${index}Title`)}</h3>
              <p>{t(`framix.feature${index}Description`)}</p>
            </div>
          ))}
        </div>
      </section>
      <MediaGallery
        screenshots={['editor', 'captions', 'workflow', 'review'].map(
          (name, index) => ({
            src: `/images/framix/${name}.webp`,
            label: t(`framix.screen${index}`),
          }),
        )}
        video="/videos/framix-demo.mp4"
        poster="/images/framix/demo-poster.webp"
        subtitles="/videos/framix-demo-id.vtt"
        title={t('framix.galleryTitle')}
        intro={t('framix.galleryIntro')}
        videoTitle={t('framix.videoTitle')}
        videoNote={t('framix.videoNote')}
      />
      <section className="studio-container studio-contact">
        <div>
          <span className="eyebrow">{t('framix.interestedBadge')}</span>
          <h2>{t('framix.interestedTitle')}</h2>
          <p>{t('framix.interestedDescription')}</p>
          <p className="small-note">+62 85211225262</p>
        </div>
        <a
          href={framixContact}
          className="primary-action framix-action"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={18} />
          {t('framix.contact')}
        </a>
      </section>
    </>
  )
}
