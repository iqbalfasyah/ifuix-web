import { motion } from 'framer-motion';

export const Privacy = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32">
      <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-lg prose-primary">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Last updated: September 18, 2026</p>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p>At IFUIX, privacy is not just a feature; it is our foundational philosophy. We build offline-first desktop software that respects your data and your attention.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">1. Data Collection</h2>
            <p>Fuira and KebunPintar store their core application data locally on your device. Fuira offers optional Google Drive synchronization, which transfers selected data to your Google Drive when you enable it.</p>

            <h2 className="text-2xl font-bold text-gray-900">KebunPintar for Android</h2>
            <p>Learning progress and settings are stored on the device. The Android app also stores trial and activation information locally. If you contact us for activation, you choose to share a device code and your message through WhatsApp. WhatsApp is an external service with its own privacy policy; opening the link does not send a message automatically. Uninstalling the app or clearing its data can remove local progress.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">2. Telemetry and Analytics</h2>
            <p>We do not include hidden tracking pixels, telemetry, or analytics software in our applications. What you do with our software is your business, not ours.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">3. Website Data</h2>
            <p>This website is a static site hosted on GitHub Pages. We do not use cookies for tracking. We only collect information you voluntarily provide to us via email or contact forms.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">4. Contact</h2>
            <p>If you have any questions about our strict privacy practices, please contact us at hello@ifuix.com.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
