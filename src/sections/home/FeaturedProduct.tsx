import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const FeaturedProduct = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
              {t('featured.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('featured.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('featured.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products/fuira">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {t('featured.cta')}
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-orange-400/20 rounded-3xl transform rotate-3 scale-105 blur-lg" />
              <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden aspect-[16/10] flex flex-col">
                <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-gray-900 relative">
                   <img 
                      src="/images/fuira/Welcome.png" 
                      alt="Fuira Welcome Screen" 
                      className="w-full h-full object-cover object-left-top absolute inset-0"
                    />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
