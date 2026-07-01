import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">{t('about.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('about.desc')}
          </p>
        </motion.div>

        <div className="prose prose-lg mx-auto text-gray-600 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story_title')}</h2>
          <p className="mb-6 leading-relaxed">
            {t('about.story_p1')}
          </p>
          <p className="leading-relaxed">
            {t('about.story_p2')}
          </p>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t('about.founder_title')}</h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-2xl mx-auto">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-lg">
              <img 
                src="https://github.com/iqbalfasyah.png" 
                alt="Iqbal Fasyah" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Iqbal Fasyah</h3>
              <p className="text-primary font-medium mb-4">{t('about.founder_role')}</p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.founder_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
