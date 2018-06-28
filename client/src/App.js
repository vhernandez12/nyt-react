import React from "react";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import Footer from "./components/Footer";

const App = () => (  
    <div >
      <Header />
      <Nav />
      <Search />
      <Results />
      <Saved />
      <Footer />
    </div>
);

export default App;
