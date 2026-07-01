import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">About IFUIX</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            IFUIX is an independent software studio founded by Iqbal Fasyah.
            <br/><br/>
            We build thoughtful software focused on productivity, privacy, and simplicity.
          </p>
        </motion.div>

        <div className="space-y-16 max-w-3xl mx-auto">
          <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full" />

          {/* Founder Section */}
          <section className="bg-white p-6 md:p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-10 items-center">
            <div className="w-48 h-48 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden border-4 border-white shadow-lg">
               {/* Placeholder for founder photo */}
               <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400 font-bold text-2xl">
                 IF
               </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Meet the Founder</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Iqbal Fasyah</h3>
              <p className="text-gray-500 font-medium mb-6">Full Stack Software Engineer</p>
              <p className="text-gray-600 leading-relaxed">
                Building thoughtful software from Indonesia. I started IFUIX because I was tired of tools that distract, track, and exploit users. My goal is to craft beautiful, single-purpose applications that respect your time and data.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
