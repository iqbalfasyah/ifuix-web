import { ArrowDownToLine, ArrowUpRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { products } from '../data/products'
import { framixContact } from '../data/site'

export const ProductCards = ({ downloadsOnly = false }: { downloadsOnly?: boolean }) => {
  const { t } = useTranslation()
  return (
    <div className="product-grid">
      {products.filter((product) => !downloadsOnly || product.download).map((product) => (
        <article key={product.id} className={`product-card ${product.tone}`}>
          <Link
            to={product.detail}
            className="product-preview"
            aria-label={`${t('studio.explore')} ${product.name}`}
          >
            <span className="platform-pill">
              {product.platform} · {t(`studio.${product.id}.category`)}
            </span>
            <img
              src={product.image}
              alt={t(`studio.${product.id}.imageAlt`)}
              loading="lazy"
              width="1200"
              height="800"
            />
          </Link>
          <div className="product-card-content">
            <div className="product-title">
              <h3>{product.name}</h3>
              <span>{t(`studio.${product.id}.label`)}</span>
            </div>
            <p>{t(`studio.${product.id}.description`)}</p>
            <ul className="feature-chips">
              {[1, 2, 3].map((n) => (
                <li key={n}>{t(`studio.${product.id}.chip${n}`)}</li>
              ))}
            </ul>
            <div className="card-actions">
              <Link to={product.detail} className="text-action">
                {t('studio.discover')} <ArrowUpRight size={18} />
              </Link>
              {product.download ? <Link to={product.download} className="download-action">
                <ArrowDownToLine size={16} />
                {t('studio.download')}
              </Link> : <a href={framixContact} className="whatsapp-action" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} />{t('framix.cardContact')}</a>}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
