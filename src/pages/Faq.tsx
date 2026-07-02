import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('faq.title')}</h1>
          <p className="text-xl text-gray-600 mb-12">{t('faq.desc')}</p>
          
          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('faq.q1')}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('faq.a1_p1')}</p>
                <p>{t('faq.a1_p2')}</p>
                <p className="font-medium text-gray-900">{t('faq.a1_p3')}</p>
                <p>{t('faq.a1_p4')}</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t('faq.a1_li1')}</li>
                  <li>{t('faq.a1_li2')}</li>
                  <li>{t('faq.a1_li3')}</li>
                  <li>{t('faq.a1_li4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
