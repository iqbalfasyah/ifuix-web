import { motion } from 'framer-motion';
import { Check, Code2, HardDrive, Monitor } from 'lucide-react';

export const Trust = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 mb-6 mx-auto md:mx-0">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-4">No Compromises</h3>
            <ul className="space-y-3 text-gray-600 inline-block text-left">
              <li className="flex items-center gap-2"><span className="text-primary font-bold">100%</span> Offline</li>
              <li className="flex items-center gap-2"><span className="text-primary font-bold">No</span> Ads</li>
              <li className="flex items-center gap-2"><span className="text-primary font-bold">No</span> Tracking</li>
              <li className="flex items-center gap-2"><span className="text-primary font-bold">No</span> Subscriptions</li>
              <li className="flex items-center gap-2"><span className="text-primary font-bold">Open</span> Roadmap</li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 mb-6 mx-auto md:mx-0">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Built with Modern Tech</h3>
            <ul className="space-y-3 text-gray-600 inline-block text-left">
              <li className="flex items-center gap-2">Electron</li>
              <li className="flex items-center gap-2">React</li>
              <li className="flex items-center gap-2">Google Drive Sync</li>
              <li className="flex items-center gap-2">Markdown</li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 mb-6 mx-auto md:mx-0">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Works Anywhere</h3>
            <ul className="space-y-3 text-gray-600 inline-block text-left">
              <li className="flex items-center gap-2">Windows (10+)</li>
              <li className="flex items-center gap-2">macOS (12+)</li>
              <li className="flex items-center gap-2">Linux (AppImage / snap)</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
