import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const screenshots = [
  { src: '/images/fuira/Welcome.png', title: 'Welcome Dashboard' },
  { src: '/images/fuira/Schedule.png', title: 'Schedule & Tasks' },
  { src: '/images/fuira/Schedule-Add.png', title: 'Smart Task Entry' },
  { src: '/images/fuira/Notes.png', title: 'Markdown Notes' },
  { src: '/images/fuira/Timer.png', title: 'Focus Timer' },
  { src: '/images/fuira/Data_Sync.png', title: 'Google Drive Sync' },
  { src: '/images/fuira/Settings.png', title: 'Customizable Settings' }
];

export const ProductDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));

  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">Fuira</h1>
            <p className="text-2xl text-gray-600 mb-10">Fast. Private. Offline-first.</p>
            <div className="flex justify-center">
              <Link to="/download">
                <Button size="lg" leftIcon={<Download className="w-5 h-5" />}>Download for Windows</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshot Carousel */}
      <section className="py-24 bg-white max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A Look Inside</h2>
          <p className="text-lg text-gray-500">A beautiful, distraction-free interface designed for deep work.</p>
        </div>
        
        <div className="relative max-w-5xl mx-auto group">
          <div className="aspect-[16/10] bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover object-left-top"
              />
            </AnimatePresence>
            
            {/* Overlay Title */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <p className="font-bold text-xl">{screenshots[currentIndex].title}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-900 shadow-lg hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-900 shadow-lg hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Fuira?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            'Smart Reminder',
            'Markdown Notes',
            'Google Drive Sync',
            'Timer',
            'Prayer Time',
            'Local Storage',
            'Native Notification',
            'Cross Platform'
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary/30 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 bg-white max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Designed for Focus</h2>
          <ul className="space-y-6 text-left">
            {[
              'Instant launch times with native performance.',
              'No tracking pixels, no telemetry, no analytics.',
              'Works perfectly without an internet connection.',
              'Minimalist interface that gets out of your way.'
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-gray-700 text-xl font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
