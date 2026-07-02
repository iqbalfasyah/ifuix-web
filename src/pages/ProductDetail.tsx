import { motion } from 'framer-motion';
import { Download, CheckCircle2, Zap, Shield, WifiOff, Layout } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const ProductDetail = () => {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);
  
  const screenshots = [
    { src: "/images/fuira/Welcome.png", label: t('product_detail.s1') },
    { src: "/images/fuira/Schedule.png", label: t('product_detail.s2') },
    { src: "/images/fuira/Schedule-Add.png", label: t('product_detail.s3') },
    { src: "/images/fuira/Notes.png", label: t('product_detail.s4') },
    { src: "/images/fuira/Timer.png", label: t('product_detail.s5') },
    { src: "/images/fuira/Data_Sync.png", label: t('product_detail.s6') },
    { src: "/images/fuira/Setting.png", label: t('product_detail.s7') },
    { src: "/images/fuira/Settings-Adzan.png", label: t('product_detail.s8') },
    { src: "/images/fuira/features.png", label: t('product_detail.s9') },
    { src: "/images/fuira/privacy.png", label: t('product_detail.s10') },
    { src: "/images/fuira/Alert.png", label: t('product_detail.s11') },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <div className="pb-16 md:pb-32">
      {/* Product Hero */}
      <section className="pt-20 md:pt-24 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 mb-6">Fuira</h1>
            <p className="text-2xl text-gray-600 mb-10">{t('product_detail.subtitle')}</p>
            <div className="flex justify-center">
              <Link to="/download">
                <Button size="lg" className="w-full sm:w-auto px-8" leftIcon={<Download className="w-5 h-5" />}>
                  {t('product_detail.btn_download')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Images Gallery */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">{t('product_detail.look_title')}</h2>
          <p className="text-gray-500 text-center mb-12 text-lg">{t('product_detail.look_desc')}</p>
          
          <div className="bg-gray-100 rounded-3xl p-2 md:p-6 shadow-2xl relative">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl relative bg-gray-900">
              {screenshots.map((img, idx) => (
                <img 
                  key={idx}
                  src={img.src} 
                  alt={img.label}
                  className={`w-full h-full object-cover object-left-top absolute inset-0 transition-opacity duration-1000 ${activeImage === idx ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6">
              {screenshots.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                    activeImage === idx 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('product_detail.why_title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:p-8 max-w-5xl mx-auto">
            {[
              { icon: <CheckCircle2 className="text-primary" />, title: t('product_detail.w1') },
              { icon: <CheckCircle2 className="text-primary" />, title: t('product_detail.w2') },
              { icon: <CheckCircle2 className="text-primary" />, title: t('product_detail.w3') },
              { icon: <CheckCircle2 className="text-primary" />, title: t('product_detail.w4') },
              { icon: <CheckCircle2 className="text-primary" />, title: t('product_detail.w5') },
              { icon: <CheckCircle2 className="text-primary" />, title: t('product_detail.w6') },
              { icon: <CheckCircle2 className="text-primary" />, title: t('product_detail.w7') },
              { icon: <CheckCircle2 className="text-primary" />, title: t('product_detail.w8') },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                {feature.icon}
                <span className="font-medium text-gray-800">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Philosophy */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                {t('product_detail.design_title')}
              </h2>
              <ul className="space-y-6">
                {[
                  { icon: <Zap className="w-6 h-6 text-primary" />, text: t('product_detail.d1') },
                  { icon: <Shield className="w-6 h-6 text-primary" />, text: t('product_detail.d2') },
                  { icon: <WifiOff className="w-6 h-6 text-primary" />, text: t('product_detail.d3') },
                  { icon: <Layout className="w-6 h-6 text-primary" />, text: t('product_detail.d4') }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-lg text-gray-600 mt-2">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-3xl p-0 relative overflow-hidden h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-orange-400/20 mix-blend-multiply z-10 pointer-events-none"></div>
              <img src="/images/fuira/privacy.png" alt="Privacy Philosophy" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
