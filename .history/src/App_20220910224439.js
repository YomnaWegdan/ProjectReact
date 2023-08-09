import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Services' element={<Services/>}/>
    <Route path='Contact' element={<Contact}/>

    <div>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </div>
    
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
