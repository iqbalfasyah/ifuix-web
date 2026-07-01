import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-white pt-24 md:pt-32 pb-16 md:pb-32">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-primary/10 to-orange-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 to-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
              {t('hero.title')}<span className="text-primary">{t('hero.title_highlight')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/products">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {t('hero.cta_explore')}
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                  {t('hero.cta_mission')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
