import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const Privacy = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32">
      <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-lg prose-primary">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: September 21, 2026</p>

          {/* Highlight for Kebun Pintar Family Policy */}
          <div className="not-prose mb-10 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-emerald-600 shrink-0 mt-0.5" size={24} />
              <div>
                <h3 className="text-base font-bold text-gray-900 m-0">Kebun Pintar: Huruf &amp; Angka</h3>
                <p className="text-sm text-gray-600 m-0 mt-0.5">
                  Looking for the dedicated child and family privacy policy for the Android app?
                </p>
              </div>
            </div>
            <Link
              to="/kebunpintar/privacy"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shrink-0 shadow-sm"
            >
              View Kebun Pintar Policy
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p>At IFUIX, privacy is not just a feature; it is our foundational philosophy. We build offline-first software that respects your data and your attention.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">1. Data Collection</h2>
            <p>Fuira and KebunPintar store their core application data locally on your device. Fuira offers optional Google Drive synchronization, which transfers selected data to your Google Drive when you enable it.</p>

            <h2 className="text-2xl font-bold text-gray-900">KebunPintar for Android</h2>
            
            <h2 className="text-2xl font-bold text-gray-900">4. Contact</h2>
            <p>If you have any questions about our strict privacy practices, please contact us at hello@ifuix.com.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
