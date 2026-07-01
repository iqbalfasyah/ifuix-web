import { motion } from 'framer-motion';

export const Founder = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-6 block">Meet the Founder</span>
          
          <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full mb-8 overflow-hidden border-2 border-gray-700">
            <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold text-xl">
              IF
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Iqbal Fasyah
          </h2>
          <p className="text-xl text-primary font-medium mb-8">
            Full Stack Software Engineer
          </p>

          <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            "Building thoughtful software from Indonesia. I believe software should respect users' time, attention, and privacy instead of exploiting them."
          </p>
          
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
