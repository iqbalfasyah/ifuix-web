import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-400/5 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Introducing IFUIX
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
            Thoughtful software for a <span className="text-primary">noisy world.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We build beautifully crafted, privacy-first desktop applications that improve your everyday productivity without sacrificing your data.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/download">
              <Button size="lg" leftIcon={<Download className="w-5 h-5" />}>
                Download Fuira
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="secondary" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Our Philosophy
              </Button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 mx-auto max-w-5xl rounded-2xl border border-gray-200/60 bg-white/50 backdrop-blur-sm p-2 shadow-2xl shadow-gray-200/50"
        >
          <div className="aspect-[16/9] w-full rounded-xl bg-gray-100 flex items-center justify-center border border-gray-100 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50" />
            <p className="text-gray-400 font-medium relative z-10">Hero Application Screenshot Placeholder</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
