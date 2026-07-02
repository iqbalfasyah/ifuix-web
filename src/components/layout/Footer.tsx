import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white transform transition-transform group-hover:scale-105">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">IFUIX</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t('footer.products')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/products/fuira" className="hover:text-primary transition-colors">Fuira Desktop</Link></li>
              <li><Link to="/download" className="hover:text-primary transition-colors">{t('footer.products')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('footer.about')}</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">{t('nav.faq')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-red-500">❤️</span> Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col justify-center items-center gap-4 text-sm text-gray-400 text-center">
          <p>© {currentYear} IFUIX. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
