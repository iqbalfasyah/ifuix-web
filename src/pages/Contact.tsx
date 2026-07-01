import { motion } from 'framer-motion';
import { Mail, Code, Briefcase, User } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-16">
            Have a question, feedback, or just want to say hi? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <a href="mailto:hello@ifuix.com" className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/50 hover:shadow-lg transition-all flex flex-col items-center relative overflow-hidden">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Email</h3>
            <p className="text-sm text-gray-500 mb-4">hello@ifuix.com</p>
            <div className="text-xs bg-gray-50 px-3 py-1 rounded-full text-gray-500 flex items-center gap-2">
              <User className="w-3 h-3" /> Replies personally by Iqbal Fasyah
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/iqbalfasyah" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/50 hover:shadow-lg transition-all flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">LinkedIn</h3>
            <p className="text-sm text-gray-500">linkedin.com/in/iqbalfasyah</p>
          </a>
          
          <a href="https://github.com/iqbalfasyah" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/50 hover:shadow-lg transition-all flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 mb-4 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">GitHub</h3>
            <p className="text-sm text-gray-500">github.com/iqbalfasyah</p>
          </a>
        </div>
      </div>
    </div>
  );
};
