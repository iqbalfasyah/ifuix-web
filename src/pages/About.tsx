import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About IFUIX</h1>
          <p className="text-xl text-gray-500 font-medium tracking-wide uppercase">Founded in Indonesia.</p>
        </motion.div>

        <div className="space-y-16 max-w-3xl mx-auto text-center">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our mission is to build software that quietly helps people every day. We believe software should respect users instead of exploiting them.
            </p>
          </section>

          <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full" />

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The IFUIX Philosophy</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-left mt-10">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-xl mb-3 text-gray-900">Quality over Quantity</h3>
                <p className="text-gray-600">We don't build dozens of mediocre tools. We focus on single, polished applications that do one thing exceptionally well.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-xl mb-3 text-gray-900">Quietly Helpful</h3>
                <p className="text-gray-600">Software shouldn't yell at you with notifications. Our tools stay out of the way until you need them.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
