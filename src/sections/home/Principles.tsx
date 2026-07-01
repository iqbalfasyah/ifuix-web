import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export const Principles = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Principles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We operate differently than most modern software companies. Here is exactly where we stand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-3xl border border-red-100 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                <X className="w-5 h-5" />
              </span>
              We don't believe in
            </h3>
            <ul className="space-y-4">
              {['Ads', 'Tracking', 'Selling Data', 'Dark Patterns'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-gray-600 font-medium">
                  <X className="w-5 h-5 text-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-3xl border border-green-100 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-500">
                <Check className="w-5 h-5" />
              </span>
              We believe in
            </h3>
            <ul className="space-y-4">
              {['Privacy', 'Ownership', 'Simplicity', 'Reliability'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-gray-600 font-medium">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
