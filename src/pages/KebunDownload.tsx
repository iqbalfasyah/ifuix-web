import {
  ArrowDownToLine,
  ArrowLeft,
  CheckCircle2,
  Smartphone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SEO } from '../components/seo/SEO'
import { kebunRelease } from '../data/products'
export const KebunDownload = () => {
  const { t } = useTranslation()
  return (
    <div className="studio-page">
      <SEO
        title={`${t('kebun.download')} | IFUIX`}
        description={t('install.intro')}
        url="https://ifuix.com/download/kebunpintar"
      />
      <div className="studio-container">
        <Link className="back-link" to="/products/kebunpintar">
          <ArrowLeft size={16} />
          Kebun Pintar: Huruf & Angka
        </Link>
        <header className="page-intro">
          <span className="eyebrow">{t('studio.officialDownloads')}</span>
          <h1>{t('kebun.download')}</h1>
          <p>{t('install.intro')}</p>
        </header>
        <div className="install-layout">
          <aside className="apk-card">
            <img
              className="app-icon"
              src="/images/kebunpintar/icon.png"
              alt=""
              width="72"
              height="72"
            />
            <h2>Kebun Pintar: Huruf & Angka</h2>
            <p className="apk-platform">
              <Smartphone size={18} />
              Android · APK
            </p>
            {kebunRelease.url ? (
              <>
                <dl className="release-details">
                  <div>
                    <dt>{t('install.version')}</dt>
                    <dd>{kebunRelease.version}</dd>
                  </div>
                  <div>
                    <dt>{t('install.size')}</dt>
                    <dd>{kebunRelease.sizeMB} MB</dd>
                  </div>
                  {kebunRelease.minAndroid && (
                    <div>
                      <dt>Android</dt>
                      <dd>{kebunRelease.minAndroid}+</dd>
                    </div>
                  )}
                </dl>
                <a
                  download={kebunRelease.filename || true}
                  href={kebunRelease.url}
                  className="primary-action garden-action"
                >
                  <ArrowDownToLine size={18} />
                  {t('install.downloadApk')}
                </a>
                <p className="apk-filename">{kebunRelease.filename}</p>
              </>
            ) : (
              <div className="release-pending">
                <p>{t('install.pending')}</p>
                <Link className="text-action" to="/contact">
                  {t('studio.contact')}
                </Link>
              </div>
            )}
            <p className="small-note">{t('install.notPlayStore')}</p>
            {kebunRelease.sha256 && (
              <details className="checksum">
                <summary>SHA-256</summary>
                <code>{kebunRelease.sha256}</code>
              </details>
            )}
            <div className="apk-offline">
              <CheckCircle2 size={18} />
              <span>{t('install.offline')}</span>
            </div>
          </aside>
          <div className="install-guide">
            <span className="eyebrow">{t('install.forParents')}</span>
            <h2>{t('kebun.installGuide')}</h2>
            <ol className="install-steps">
              {[1, 2, 3, 4, 5].map((n) => (
                <li key={n}>
                  <span className="step-number">{n}</span>
                  <div>
                    <h3>{t(`install.step${n}Title`)}</h3>
                    <p>{t(`install.step${n}Description`)}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="install-note">{t('install.safety')}</div>
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
            <h2 className="faq-heading">{t('install.helpTitle')}</h2>
            {[1, 2, 3].map((n) => (
              <details key={n} className="install-faq">
                <summary>{t(`install.faq${n}Title`)}</summary>
                <p>{t(`install.faq${n}Description`)}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
