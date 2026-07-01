import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ProductDetail = () => {
  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">Fuira</h1>
            <p className="text-2xl text-gray-600 mb-10">Fast. Private. Offline-first.</p>
            <div className="flex justify-center">
              <Button size="lg" leftIcon={<Download className="w-5 h-5" />}>Download for Windows</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Fuira?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            'Smart Reminder',
            'Markdown Notes',
            'Google Drive Sync',
            'Timer',
            'Prayer Time',
            'Local Storage',
            'Native Notification',
            'Cross Platform'
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 bg-white max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Designed for Focus</h2>
            <ul className="space-y-4">
              {[
                'Instant launch times with native performance',
                'No tracking pixels, no telemetry, no analytics',
                'Works perfectly without an internet connection',
                'Minimalist interface that gets out of your way'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-600 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden shadow-inner aspect-[16/10]">
             <img src="/images/fuira/Schedule-Add.png" alt="Fuira Schedule" className="w-full h-full object-cover object-left-top" />
          </div>
        </div>
      </section>
    </div>
  );
};
