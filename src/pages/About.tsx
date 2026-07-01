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
      </div>
    </div>
  );
};
