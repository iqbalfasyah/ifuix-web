import { motion } from 'framer-motion';
import { Shield, WifiOff, Sparkles, MonitorSmartphone } from 'lucide-react';

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Privacy First',
    description: 'Your data stays on your device. We do not track, sell, or collect your personal information.'
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: 'Offline First',
    description: 'Our applications work seamlessly without an internet connection, ensuring you are always productive.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Beautiful UX',
    description: 'Minimalist, fast, and delightful interfaces that get out of your way and let you focus on work.'
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: 'Cross Platform',
    description: 'Built to run flawlessly across Windows, macOS, and Linux with native performance and feel.'
  }
];

export const Values = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why IFUIX?</h2>
          <p className="text-lg text-gray-600">
            We believe software should respect your time, attention, and privacy. That's why we build tools based on these core principles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
