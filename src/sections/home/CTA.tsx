import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-3xl p-6 md:p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start using Fuira today.
            </h2>
            <p className="text-xl text-primary font-medium mb-10 max-w-2xl mx-auto flex items-center justify-center gap-4">
              <span>Free.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>Offline.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span>Privacy First.</span>
            </p>
            <div className="flex justify-center">
              <Link to="/download">
                <Button size="lg" className="bg-primary hover:bg-orange-500 text-white" leftIcon={<Download className="w-5 h-5" />}>
                  Download Fuira
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
