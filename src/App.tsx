import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div className="p-24 text-center text-gray-500">Page coming soon.</div>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
