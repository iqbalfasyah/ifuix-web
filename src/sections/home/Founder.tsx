import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Founder = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-gray-50 shadow-xl relative">
            <img 
              src="https://github.com/iqbalfasyah.png" 
              alt="Iqbal Fasyah" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                {t('founder.badge')}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('founder.title')}</h2>
            
            <div className="relative mb-6">
              <Quote className="absolute -top-4 -left-6 w-10 h-10 text-gray-100 -z-10 transform rotate-180" />
              <p className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed">
                "{t('founder.quote')}"
              </p>
            </div>
            
            <p className="text-gray-500 mb-8 leading-relaxed text-lg">
              {t('founder.desc')}
            </p>

            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
              {t('founder.link')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
