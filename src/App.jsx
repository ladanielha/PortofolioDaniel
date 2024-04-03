import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import Project from "./pages/Project";
import Skills from "./pages/Skill";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);
  console.log(
    '%c Hai 🕵️‍♂️',
    'background: #ff5252; color: #fff; padding: 10px; font-size: 16px; font-weight: bold;'
  );

  return (
    <>
    <Loader load={load} />
    <div className="bg-white dark:bg-gray-800 ">
        <Navbar />
        
        <Home />
        <Project />
        <Skills />
        <About />
        <Contact/>
        {/*<Skills />
         */}
        <Footer />
      </div>
    </>
  );
}

export default App;
