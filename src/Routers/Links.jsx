import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Notfound from "../Component/Notfound";
import AddResearch from "../Component/AddResearch";
import Userprofile from "../Component/Userprofile/Userprofile";
import ResearchDetails from "../Component/AboutResearch/AboutResearch";
function Link() {
  return (
    <div className=" bg-zinc-800  w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddResearch" element={<AddResearch />} />
        <Route path="/user" element={<Userprofile/>}></Route>
        <Route path="/viewresearch" element={<ResearchDetails/>}></Route>
        {/* <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} /> */}
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default Link;
