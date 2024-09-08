import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
