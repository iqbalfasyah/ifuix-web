import { Link } from 'react-router-dom';
import { Shield, Code, Briefcase, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">IFUIX</span>
            </Link>
            <p className="text-gray-900 font-medium text-lg mb-2">
              Thoughtfully crafted software<br/>for everyday life.
            </p>
            <p className="text-gray-500 mb-6">
              Built independently by <br/>
              <span className="font-medium text-gray-700">Iqbal Fasyah</span> <br/>
              Indonesia
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="https://github.com/iqbalfasyah" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Code className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/iqbalfasyah" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Briefcase className="w-5 h-5" /></a>
              <a href="mailto:hello@ifuix.com" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="/products/fuira" className="hover:text-primary transition-colors">Fuira</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Upcoming</Link></li>
              <li><Link to="/download" className="hover:text-primary transition-colors">Downloads</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Release Notes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-gray-500">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="https://github.com/iqbalfasyah" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} IFUIX.</p>
        </div>
      </div>
    </footer>
  );
};
