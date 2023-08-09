import './App.css';
import { BrowserRouter , Routes , } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
