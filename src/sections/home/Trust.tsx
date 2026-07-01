import { Lock, WifiOff, EyeOff } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Trust = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">{t('trust.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
          {[
            { icon: <Lock className="w-6 h-6" />, title: t('trust.t1_title'), desc: t('trust.t1_desc') },
            { icon: <WifiOff className="w-6 h-6" />, title: t('trust.t2_title'), desc: t('trust.t2_desc') },
            { icon: <EyeOff className="w-6 h-6" />, title: t('trust.t3_title'), desc: t('trust.t3_desc') },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6 border border-gray-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
