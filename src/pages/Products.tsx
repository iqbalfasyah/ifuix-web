import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t('products.title')}</h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Fuira Product Card */}
          <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-6 w-fit">
                {t('products.badge')}
              </span>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('products.fuira_title')}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('products.fuira_desc')}
              </p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  t('products.fuira_f1'),
                  t('products.fuira_f2'),
                  t('products.fuira_f3')
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products/fuira" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    {t('products.btn_learn')}
                  </Button>
                </Link>
                <Link to="/download" className="flex-1">
                  <Button size="lg" className="w-full" rightIcon={<Download className="w-4 h-4" />}>
                    {t('products.btn_download')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* More products can be added here */}
          <div className="bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-200 border-dashed flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-gray-400 font-bold text-2xl">?</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">More coming soon</h3>
            <p className="text-gray-400">We are currently developing our next product.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
