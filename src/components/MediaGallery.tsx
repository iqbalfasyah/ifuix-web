import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export interface Screenshot {
  src: string
  label: string
}
export const MediaGallery = ({
  screenshots,
  video,
  poster,
  title,
  intro,
  videoTitle,
  videoNote,
  subtitles,
}: {
  screenshots: Screenshot[]
  video: string
  poster: string
  title: string
  intro: string
  videoTitle: string
  videoNote: string
  subtitles?: string
}) => {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const element = dialog.current
    const close = () => {
      document.body.style.overflow = ''
    }
    element?.addEventListener('close', close)
    return () => {
      element?.removeEventListener('close', close)
      close()
    }
  }, [])
  const change = (offset: number) =>
    setSelected(
      (previous) =>
        (previous + offset + screenshots.length) % screenshots.length,
    )
  return (
    <section id="screenshots" className="screenshot-section">
      <div className="studio-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('media.badge')}</span>
            <h2>{title}</h2>
          </div>
          <p>{intro}</p>
        </div>
        <figure className="demo-video">
          <video
            controls
            playsInline
            preload="none"
            poster={poster}
            aria-label={videoTitle}
            width="1920"
            height="1080"
          >
            <source src={video} type="video/mp4" />
            {subtitles && (
              <track
                kind="captions"
                src={subtitles}
                srcLang="id"
                label="Bahasa Indonesia"
                default
              />
            )}
            <a href={video}>{videoTitle}</a>
          </video>
          <figcaption>
            <strong>{videoTitle}</strong>
            <p>{videoNote}</p>
          </figcaption>
        </figure>
        <div className="screenshot-grid">
          {screenshots.map((screen, index) => (
            <figure key={screen.src}>
              <button
                onClick={() => {
                  setSelected(index)
                  dialog.current?.showModal()
                  document.body.style.overflow = 'hidden'
                }}
                aria-label={`${t('media.enlarge')}: ${screen.label}`}
              >
                <img
                  src={screen.src}
                  alt={screen.label}
                  width="1200"
                  height="800"
                  loading="lazy"
                />
              </button>
              <figcaption>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {screen.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <dialog
        ref={dialog}
        className="screenshot-dialog"
        aria-label={title}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') change(-1)
          if (event.key === 'ArrowRight') change(1)
        }}
      >
        <button
          className="dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label={t('studio.close')}
        >
          <X size={22} />
        </button>
        <img
          src={screenshots[selected].src}
          alt={screenshots[selected].label}
        />
        <div className="gallery-navigation">
          <button onClick={() => change(-1)} aria-label={t('media.previous')}>
            <ChevronLeft size={22} />
          </button>
          <p aria-live="polite">
            {selected + 1} / {screenshots.length} ·{' '}
            {screenshots[selected].label}
          </p>
          <button onClick={() => change(1)} aria-label={t('media.next')}>
            <ChevronRight size={22} />
          </button>
        </div>
      </dialog>
    </section>
  )
}
