import './App.css';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import {ThemeProvider} from 'styled-components'


function App() {
  const theme = ()=>{
    colors: {
      heading: "rgb(24 , 24 ,29)"
      text : "rgb(24 , 24 , 29)",
      white : "#fff",
      black : "#212529",
      helper : "#8490ff",
      bg : "rgb(249 249 255)",
      footer-bg: "#0a1435",
      btn : "rgb(98 84 243)",
      boorder : "rgba(98 84 143 0.5)",
      hr : "#ffffff",
      gradient :"linear-gradient(0deg , rgb(132 144 255) 0% , rgb(98 189 252) 100%)",
      shadow :"rgba(0 , 0 , 0, 0.02) 0px 1px 3px 0px , rgba(27,3,35,0.15) 0px 0px 0px 1px"


    },

  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
