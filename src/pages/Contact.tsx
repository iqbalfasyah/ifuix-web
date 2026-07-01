import { motion } from 'framer-motion';
import { Mail, Clock, Code2, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t('contact.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.desc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.email')}</h3>
              <a href="mailto:hello@ifuix.com" className="text-primary hover:underline text-lg font-medium">
                hello@ifuix.com
              </a>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{t('contact.replies')}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://github.com/iqbalfasyah" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors group">
                <Code2 className="w-8 h-8 text-gray-400 group-hover:text-gray-900 mb-3 transition-colors" />
                <span className="font-medium text-gray-600 group-hover:text-gray-900">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/iqbalfasyah" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors group">
                <Briefcase className="w-8 h-8 text-gray-400 group-hover:text-blue-600 mb-3 transition-colors" />
                <span className="font-medium text-gray-600 group-hover:text-blue-600">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.form_title')}</h2>
              
              <form action="https://formsubmit.co/hello@ifuix.com" method="POST" className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New submission from IFUIX Contact Form" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">{t('contact.form_name')}</label>
                    <input 
                      type="text" 
                      name="name"
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">{t('contact.form_email')}</label>
                    <input 
                      type="email" 
                      name="email"
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">{t('contact.form_message')}</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full">
                  {t('contact.form_btn')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
