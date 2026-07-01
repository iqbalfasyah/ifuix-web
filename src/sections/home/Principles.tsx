import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Principles = () => {
  const { t } = useTranslation();

  const principles = [
    t('principles.p1'),
    t('principles.p2'),
    t('principles.p3'),
    t('principles.p4')
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('principles.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-lg font-medium text-gray-800">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
