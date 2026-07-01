import { CheckCircle2, Clock, Map, FlaskConical } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Roadmap = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('roadmap.title')}</h2>
          <p className="text-gray-500 text-lg">{t('roadmap.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              status: t('roadmap.r1_status'),
              title: t('roadmap.r1_title'),
              desc: t('roadmap.r1_desc'),
              icon: <CheckCircle2 className="w-5 h-5" />,
              color: 'text-green-600',
              bg: 'bg-green-50 border-green-200'
            },
            {
              status: t('roadmap.r2_status'),
              title: t('roadmap.r2_title'),
              desc: t('roadmap.r2_desc'),
              icon: <Clock className="w-5 h-5" />,
              color: 'text-blue-600',
              bg: 'bg-blue-50 border-blue-200'
            },
            {
              status: t('roadmap.r3_status'),
              title: t('roadmap.r3_title'),
              desc: t('roadmap.r3_desc'),
              icon: <Map className="w-5 h-5" />,
              color: 'text-orange-600',
              bg: 'bg-orange-50 border-orange-200'
            },
            {
              status: t('roadmap.r4_status'),
              title: t('roadmap.r4_title'),
              desc: t('roadmap.r4_desc'),
              icon: <FlaskConical className="w-5 h-5" />,
              color: 'text-purple-600',
              bg: 'bg-purple-50 border-purple-200'
            }
          ].map((item, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${item.bg} relative overflow-hidden`}>
              <div className={`flex items-center gap-2 ${item.color} font-semibold mb-4 text-sm uppercase tracking-wider`}>
                {item.icon} {item.status}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
