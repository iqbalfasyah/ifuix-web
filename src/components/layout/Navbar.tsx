import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/icon.svg" alt="IFUIX Logo" className="w-8 h-8 md:w-10 md:h-10 transform transition-transform group-hover:scale-105" />
          <span className="font-bold text-xl md:text-2xl tracking-tight text-gray-900">IFUIX</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <Link to="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link>
          <Link to="/services" className="hover:text-primary transition-colors">{t('nav.services')}</Link>
          <Link to="/products" className="hover:text-primary transition-colors">{t('nav.products')}</Link>
          <Link to="/download" className="hover:text-primary transition-colors">{t('nav.download')}</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">{t('nav.contact')}</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-50 mr-2"
          >
            <Globe className="w-4 h-4" />
            {i18n.language === 'id' ? 'ID' : 'EN'}
          </button>
          
          <Link to="/products/fuira">
            <Button variant="ghost">{t('nav.learn_more')}</Button>
          </Link>
          <Link to="/download">
            <Button>{t('nav.get_fuira')}</Button>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={toggleLanguage} 
            className="p-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-50 flex items-center gap-1"
          >
            <Globe className="w-4 h-4" />
            {i18n.language === 'id' ? 'ID' : 'EN'}
          </button>
          
          <button 
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-4">
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">{t('nav.about')}</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">{t('nav.services')}</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">{t('nav.products')}</Link>
          <Link to="/download" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">{t('nav.download')}</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">{t('nav.contact')}</Link>
          <div className="h-px bg-gray-100 my-2"></div>
          <div className="flex flex-col gap-3 px-2">
            <Link to="/products/fuira" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-center">{t('nav.learn_more')}</Button>
            </Link>
            <Link to="/download" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full justify-center">{t('nav.get_fuira')}</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
