import React, { useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import Dropdown from "./Dropdown/Dropdown";

const Home = () => {
  const [Category, setCategory] = useState("now_playing");

  return (
    <div className="w-screen h-screen  text-white">
      <Navbar />
      <div className="w-screen h-80 bg-[#262344]">
        <div className="absolute right-0">
          <img src="../public/imgs/bgimg.png" alt="bgimg" />
        </div>
        <div className=" p-5 h-80 flex flex-col itmes-end justify-start">
          <h1 className="text-[5rem] font-serif ">Resource Hub</h1>
          <p className="text-[1vw]">
            Get all the information you need to take your research to the next
            level.
          </p>
        </div>
      </div>
      <div className="w-screen flex gap-32 md:justify-between md:px-16 items-center px-1">
        <h1 className="text-[1rem] font-bold sm:text-[1.6rem] md:text-[2rem] text-white">
          Top research
        </h1>
        <div>
          <Dropdown
            title="Category"
            options={["Ongoing Research", "Top Research", "Past Research"]}
            func={(e) => setCategory(e.target.value)}
          ></Dropdown>
        </div>
      </div>
      <Cards />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
