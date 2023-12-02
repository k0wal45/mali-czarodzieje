import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Programy from './pages/Programy';
import ScrollToHashElement from './components/ScrollToHashElement';

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/kontakt' element={<Contact />}/>
          <Route path='/programy' element={<Programy />}/>
          <Route path='/*' element={<NotFound />}/>
          <Route path='/notfound' element={<NotFound />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
