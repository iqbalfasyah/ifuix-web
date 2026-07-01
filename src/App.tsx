import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="p-8 text-primary font-bold text-2xl">IFUIX Website</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
