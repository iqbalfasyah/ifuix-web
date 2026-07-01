import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center text-white transform transition-transform group-hover:scale-105">
            <Shield className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="font-bold text-xl md:text-2xl tracking-tight text-gray-900">IFUIX</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <Link to="/download" className="hover:text-primary transition-colors">Download</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/products/fuira">
            <Button variant="ghost">Learn More</Button>
          </Link>
          <Link to="/download">
            <Button>Get Fuira</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-4">
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">About</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">Products</Link>
          <Link to="/download" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">Download</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">Contact</Link>
          <div className="h-px bg-gray-100 my-2"></div>
          <div className="flex flex-col gap-3 px-2">
            <Link to="/products/fuira" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-center">Learn More</Button>
            </Link>
            <Link to="/download" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full justify-center">Get Fuira</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
