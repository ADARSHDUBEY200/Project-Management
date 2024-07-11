import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";


const Home = () => {

  return (
    <div className="w-screen h-screen  text-white">
      <div>
        <Navbar />
      </div>
      <div>
        <Cards/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
