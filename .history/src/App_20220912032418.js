import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';



function App() {
  
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} exa/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>         
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
