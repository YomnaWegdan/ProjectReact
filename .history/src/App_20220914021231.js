import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';



function App() {
  
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/product' element={<Product/>} exact/>
          <Route path='/product/:id' element={<ProductDetail/>} exact/>
          <Route path='/cart' element={<Product/>} exact/>

          <Route path='/about' element={<About/>} exact/>
          <Route path='/contact' element={<Contact/>} exact/>         
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
