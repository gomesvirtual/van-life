import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/" className='home-link'>#VANLIFE</Link>
        <nav>
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/vans" className='nav-link'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
      <footer>
        <div>Ⓒ 2022 #VANLIFE</div>
      </footer>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);