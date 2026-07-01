import { motion } from 'framer-motion';
import { Download as DownloadIcon, Monitor, Apple } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Download = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Download Fuira</h1>
          <p className="text-xl text-gray-600 mb-2">Version 1.0.0 (Latest)</p>
          <p className="text-sm text-gray-400">Requires Windows 10+ or macOS 12+</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center flex flex-col items-center">
            <Monitor className="w-12 h-12 text-gray-400 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Windows</h3>
            <p className="text-gray-500 mb-8">.exe installer (64-bit)</p>
            <Button size="lg" className="w-full" leftIcon={<DownloadIcon className="w-5 h-5" />}>
              Download for Windows
            </Button>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 border-dashed text-center flex flex-col items-center">
            <Apple className="w-12 h-12 text-gray-400 mb-6" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">macOS</h3>
            <p className="text-gray-400 mb-8">Universal Binary</p>
            <Button size="lg" variant="outline" className="w-full text-gray-400 border-gray-300" disabled>
              Coming Soon
            </Button>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Release Notes (v1.0.0)</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Initial public release of Fuira.</li>
            <li>Core workflow features implemented.</li>
            <li>Fully offline capable.</li>
            <li>Dark mode support out of the box.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
