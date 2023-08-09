import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
