import { motion } from 'framer-motion';
import { Monitor, Smartphone, Layout, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: t('services.web_title'),
      desc: t('services.web_desc')
    },
    {
      icon: <Monitor className="w-8 h-8 text-blue-500" />,
      title: t('services.desktop_title'),
      desc: t('services.desktop_desc')
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: t('services.mobile_title'),
      desc: t('services.mobile_desc')
    }
  ];

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t('services.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-10 md:p-16 rounded-3xl border border-gray-100 shadow-sm mb-24"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('services.trust_title')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('services.trust_desc')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> High Performance & Scalable
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Beautiful UI / UX Design
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Privacy & Security First
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">10+</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Years of Experience</h4>
                <p className="text-sm text-gray-500">Delivering premium software solutions</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('services.cta_title')}</h2>
            <p className="text-lg md:text-xl text-primary-50 mb-10 leading-relaxed">
              {t('services.cta_desc')}
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="border-none shadow-xl text-primary font-bold">
                {t('services.cta_btn')} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
