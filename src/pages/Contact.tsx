import { motion } from 'framer-motion';
import { Mail, Code, Briefcase, User, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have a question, feedback, or just want to say hi? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <a href="mailto:hello@ifuix.com" className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-primary/50 hover:shadow-lg transition-all flex flex-col items-start relative overflow-hidden">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-xl">Email</h3>
              <p className="text-gray-500 mb-6">hello@ifuix.com</p>
              <div className="text-sm bg-gray-50 px-4 py-2 rounded-full text-gray-600 flex items-center gap-2 font-medium">
                <User className="w-4 h-4 text-primary" /> Replies personally by Iqbal Fasyah
              </div>
            </a>
            
            <div className="grid grid-cols-2 gap-6">
              <a href="https://www.linkedin.com/in/iqbalfasyah" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-blue-500/50 hover:shadow-lg transition-all flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">LinkedIn</h3>
                <p className="text-xs text-gray-500">@iqbalfasyah</p>
              </a>
              
              <a href="https://github.com/iqbalfasyah" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-gray-900/50 hover:shadow-lg transition-all flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">GitHub</h3>
                <p className="text-xs text-gray-500">@iqbalfasyah</p>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>
            
            <form action="https://formsubmit.co/hello@ifuix.com" method="POST" className="space-y-6">
              {/* Security and configuration for FormSubmit */}
              <input type="hidden" name="_subject" value="New Message from IFUIX Website!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full" rightIcon={<Send className="w-5 h-5" />}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
