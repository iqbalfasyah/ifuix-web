import { motion } from 'framer-motion';

export const Vision = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-6 block">Our Vision</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
            "Build software that quietly helps millions of people every day."
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto">
            IFUIX started with a simple idea: software should respect users' time, attention, and privacy. We believe in quality over quantity, building tools that solve real problems while remaining intentionally simple.
          </p>
          
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
