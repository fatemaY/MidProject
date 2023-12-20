import './app.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Programme from './components/programme/Programme';
import Tutoring from './components/tutoring/Tutoring';
import Footer from './components/footer/Footer';
import UserData from './Data/Data';



function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/enrol' element={<Tutoring />} /> 
          <Route path='/programme' element={<Programme />} /> 
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>
        <Footer />
    </div>
    // </LocalizationProvider>
  );
}

export default App;
