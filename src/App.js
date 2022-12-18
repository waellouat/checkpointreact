//import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Aboutus from './component/Aboutus';
import Pro from './component/Pro.js';
import Contact from './component/Contact';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Aboutus/>
     <Pro />
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
