import './App.css';
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Books from './pages/Books';
import Movies from './pages/Movies';
import Characters from './pages/Characters';
import Quotes from './pages/Quotes';
import Chapters from './pages/Chapters';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/chapters" element={<Chapters />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
