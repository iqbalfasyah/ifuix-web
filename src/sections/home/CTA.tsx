import { Button } from '../../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              {t('cta.desc')}
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-50" rightIcon={<ArrowRight className="w-5 h-5" />}>
                {t('cta.btn')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
