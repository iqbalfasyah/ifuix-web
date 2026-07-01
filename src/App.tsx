import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Download } from './pages/Download';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/fuira" element={<ProductDetail />} />
          <Route path="/download" element={<Download />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<div className="p-24 text-center text-gray-500">Page not found.</div>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
