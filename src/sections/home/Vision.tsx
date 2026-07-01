import { motion } from 'framer-motion';
import { Shield, Zap, CreditCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Vision = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
            {t('vision.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {t('vision.p1')}
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('vision.p2')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Shield className="w-8 h-8" />, title: t('vision.f1_title'), desc: t('vision.f1_desc') },
            { icon: <Zap className="w-8 h-8" />, title: t('vision.f2_title'), desc: t('vision.f2_desc') },
            { icon: <CreditCard className="w-8 h-8" />, title: t('vision.f3_title'), desc: t('vision.f3_desc') },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
