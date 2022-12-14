import './App.css';
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Books from './pages/Books';
import Movies from './pages/Movies';
import Characters from './pages/Characters';
import Quotes from './pages/Quotes';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
