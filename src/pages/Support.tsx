import { motion } from 'framer-motion';
import { Heart, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/Button';

export const Support = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-6">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-gray-100 mb-12 text-center"
        >
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-10 h-10 text-red-500 fill-red-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">{t('support.title')}</h1>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 text-left md:text-center leading-relaxed">
            <ul className="space-y-2 flex flex-col md:items-center">
              <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-green-500" /> {t('support.no_ads')}</li>
              <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-green-500" /> {t('support.no_tracking')}</li>
              <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-green-500" /> {t('support.no_data')}</li>
            </ul>
            <p>{t('support.desc')}</p>
            <p className="font-medium text-gray-900">{t('support.impact')}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="https://saweria.co/ifuix" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-[#E5B22D] hover:bg-[#D4A325] text-gray-900 font-bold" leftIcon={<HeartHandshake className="w-5 h-5" />}>
                {t('support.saweria_btn')}
              </Button>
            </a>
            <a href="https://paypal.me/iqbalfasyah" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-[#00457C] hover:bg-[#003666] text-white font-bold" leftIcon={<HeartHandshake className="w-5 h-5" />}>
                {t('support.paypal_btn')}
              </Button>
            </a>
          </div>


        </motion.div>

        {/* Why Support & Transparency Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('support.why_title')}</h3>
            <ul className="space-y-4">
              {[
                t('support.why_1'),
                t('support.why_2'),
                t('support.why_3'),
                t('support.why_4')
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 text-gray-900 font-medium mt-6">
                <Heart className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>{t('support.why_5')}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('support.transparency_title')}</h3>
            <ul className="space-y-4">
              {[
                t('support.t1'),
                t('support.t2'),
                t('support.t3'),
                t('support.t4'),
                t('support.t5')
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* The Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">{t('support.promise_title')}</h3>
          <p className="text-xl md:text-2xl font-medium mb-4">{t('support.promise_1')}</p>
          <p className="text-lg text-white/80">{t('support.promise_2')}</p>
        </motion.div>

      </div>
    </div>
  );
};
