import { motion } from 'framer-motion';

const items = [
  { phase: 'Phase 1', title: 'v1.0 MVP', desc: 'Core Fuira functionality focused on privacy and speed.', status: 'current' },
  { phase: 'Phase 2', title: 'v1.1 Productivity', desc: 'Advanced workflows and integrations.', status: 'upcoming' },
  { phase: 'Phase 3', title: 'v1.2 AI', desc: 'On-device, privacy-preserving AI assistance.', status: 'future' },
  { phase: 'Phase 4', title: 'v2.0 Cross Platform', desc: 'Native mobile companion apps.', status: 'future' },
];

export const Roadmap = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Road Ahead</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to continuous improvement. Here is a glimpse of what we are working on.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${item.status === 'current' ? 'border-primary bg-primary/5 shadow-md shadow-primary/5' : 'border-gray-200 bg-white shadow-sm'}`}
            >
              <span className={`text-sm font-bold tracking-wider uppercase mb-2 block ${item.status === 'current' ? 'text-primary' : 'text-gray-400'}`}>
                {item.phase}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
