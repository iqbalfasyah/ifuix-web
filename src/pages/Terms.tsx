import { motion } from 'framer-motion';

export const Terms = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-primary">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-500 mb-10">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
            <p>By downloading or using software provided by IFUIX, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not use our software.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on IFUIX's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">3. Disclaimer</h2>
            <p>The materials on IFUIX's website and our software applications are provided on an 'as is' basis. IFUIX makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">4. Limitations</h2>
            <p>In no event shall IFUIX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on IFUIX's website or software.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
