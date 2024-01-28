import "./styles/main.css";




import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";

function App() {
  return (
    <div className="App">
        
      <Navbar/>

      {/* <Home/> */}
      {/* <Projects/> */}
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
