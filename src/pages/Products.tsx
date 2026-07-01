import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Products = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughtfully crafted software designed to stay out of your way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Fuira Product */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
          >
            <div className="aspect-[16/10] bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange-400/5 group-hover:scale-105 transition-transform duration-500" />
              <div className="w-full h-full bg-gray-900 rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden relative z-10 transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500">
                <img 
                  src="/images/fuira/Welcome.png" 
                  alt="Fuira Welcome Screen" 
                  className="w-full h-full object-cover object-left-top absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow bg-white z-20">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-gray-900">Fuira</h2>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wide">Flagship</span>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Our core desktop application designed to streamline your workflow with unparalleled speed and complete offline capability.
              </p>
              <ul className="space-y-2 mb-8 flex-grow">
                {['Smart Reminder', 'Markdown Notes', 'Google Drive Sync'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Link to="/products/fuira">
                <Button className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Fuira
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Upcoming Product */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-gray-200 border-dashed bg-gray-50 flex flex-col items-center justify-center p-12 text-center"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-6 flex items-center justify-center text-gray-400">
              ?
            </div>
            <h2 className="text-2xl font-bold text-gray-400 mb-4">Project Next</h2>
            <p className="text-gray-500 mb-8 max-w-sm">
              We are working on something new that follows our strict privacy-first philosophy.
            </p>
            <Button variant="outline" disabled>Coming Soon</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
