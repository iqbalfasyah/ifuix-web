import { Heart, Sparkles, UserCheck, Flag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Values = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('values.title')}</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Sparkles className="w-6 h-6" />,
              title: t('values.v1_title'),
              desc: t('values.v1_desc'),
              color: 'text-blue-500',
              bg: 'bg-blue-50'
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: t('values.v2_title'),
              desc: t('values.v2_desc'),
              color: 'text-red-500',
              bg: 'bg-red-50'
            },
            {
              icon: <UserCheck className="w-6 h-6" />,
              title: t('values.v3_title'),
              desc: t('values.v3_desc'),
              color: 'text-green-500',
              bg: 'bg-green-50'
            },
            {
              icon: <Flag className="w-6 h-6" />,
              title: t('values.v4_title'),
              desc: t('values.v4_desc'),
              color: 'text-orange-500',
              bg: 'bg-orange-50'
            }
          ].map((value, i) => (
            <div key={i} className="group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${value.bg} ${value.color} mb-6 transition-transform group-hover:scale-110`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
