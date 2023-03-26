import React from "react";
import About from "./components/About";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import Services from "./components/Services";


function App() {
  return (
    <div>
       <Navbar/>
       <Home/>
       <About/>
       <Book/>
       <Services/>
       <Footer/>
       
    </div>
  );
}

export default App;
