import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

//Components
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
