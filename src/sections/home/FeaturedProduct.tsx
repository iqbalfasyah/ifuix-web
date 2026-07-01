import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturedProduct = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Featured Product</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Fuira
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our flagship desktop application designed to streamline your workflow with unparalleled speed and complete offline capability. Experience a new standard in software craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products/fuira">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Explore Fuira
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-orange-400/20 rounded-3xl transform rotate-3 scale-105 blur-lg" />
              <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden aspect-[4/3] flex flex-col">
                <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-gray-100 flex items-center justify-center p-8">
                  <div className="text-center text-gray-400 font-medium">
                    <p>Fuira App Interface</p>
                    <p className="text-sm mt-2 font-normal">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
