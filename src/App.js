import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Programy from './pages/Programy';
import Event from './pages/Event';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/kontakt' element={<Contact />}/>
          <Route path='/onas' element={<AboutPage />}/>
          <Route path='/programy' element={<Programy />}/>
          <Route path='/programy/:id' element={<Event />}/>
          <Route path='/*' element={<NotFound />}/>
          <Route path='/notfound' element={<NotFound />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
