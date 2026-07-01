import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white transform transition-transform group-hover:scale-105">
            <Shield className="w-6 h-6" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-gray-900">IFUIX</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <Link to="/download" className="hover:text-primary transition-colors">Download</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/products/fuira">
            <Button variant="ghost" className="hidden sm:flex">Learn More</Button>
          </Link>
          <Link to="/download">
            <Button>Get Fuira</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
