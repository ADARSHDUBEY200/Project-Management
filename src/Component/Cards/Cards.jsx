import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Footer from "../Footer/Footer";

const data = [
  {
    username: "example_user",
    likes: 150,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    projects: [
      {
        project_name: "Awesome Project",
        date: "2024-07-09",
        project_details: {
          description: "This project aims to...",
          technologies_used: ["Python", "Flask", "JavaScript", "React"],
        },
      },
    ],
  },
  {
    username: "example_user",
    likes: 150,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    projects: [
      {
        project_name: "Awesome Project",
        date: "2024-07-09",
        project_details: {
          description: "This project aims to...",
          technologies_used: ["Python", "Flask", "JavaScript", "React"],
        },
      },
    ],
  },
  {
    username: "example_user",
    likes: 150,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    projects: [
      {
        project_name: "Awesome Project",
        date: "2024-07-09",
        project_details: {
          description: "This project aims to...",
          technologies_used: ["Python", "Flask", "JavaScript", "React"],
        },
      },
    ],
  },
  {
    username: "example_user",
    likes: 150,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    projects: [
      {
        project_name: "Awesome Project",
        date: "2024-07-09",
        project_details: {
          description: "This project aims to...",
          technologies_used: ["Python", "Flask", "JavaScript", "React"],
        },
      },
    ],
  },
  {
    username: "example_user",
    likes: 150,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    projects: [
      {
        project_name: "Awesome Project",
        date: "2024-07-09",
        project_details: {
          description: "This project aims to...",
          technologies_used: ["Python", "Flask", "JavaScript", "React"],
        },
      },
    ],
  },
];

const Cards = () => {
  const [Category, setCategory] = useState("now_playing");

  return (
    <div className="w-screen h-screen bg-white overflow-hidden">
      <div className="w-screen  h-80 bg-[#262344]">
        <div className="absolute right-0">
          <img src="../public/imgs/bgimg.png" alt="bgimg" />
        </div>
        <div className=" p-5 h-80flex flex-col itmes-end justify-start">
          <h1 className="text-[5rem] font-serif ">Resource Hub</h1>
          <p className="text-[1vw]">
            Get all the information you need to take your research to the next level.
          </p>
        </div>
      </div>
      <div className="w-screen px-5 py-2">
        <div className="w-screen flex gap-32 md:justify-between md:px-16 items-center px-1">
          <h1 className="text-[1rem] font-bold sm:text-[1.6rem] md:text-[2rem] text-black">
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
        <div className="w-screen flex gap-5 p-2 md:p-5 overflow-x-auto relative">
          {data.map((items, id) => (
            <div key={id} className="md:w-[20vw] md:h-[48vh] sm:w-[40vw] sm:h-[44vh] w-[70vw] h-[45vh]  bg-[#3e4a5b] rounded-md">
              <div className="flex w-[70vw] h-fit gap-5 items-center">
                <div className="w-fit p-2 ">
                  <Link to="/user">
                    <img
                      className="w-10 h-10 md:w-16 md:h-16 sm:w-10 sm:h-10 object-cover cursor-pointer  object-center rounded-full"
                      src={items.img}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="w-[13vw]  sm:w-[12vw]  flex   md:justify-between ">
                  <div className="flex justify-start  flex-col">
                    <h1 className=" text-sm md:text-lg font-serif">{items.username}</h1>
                    <h1 className="text-sm">{items.likes}</h1>
                  </div>
                  <div>
                    <span className="cursor-pointer">...</span>
                  </div>
                </div>
              </div>
              <div className="img  flex justify-center items-center mt-5">
                <img
                  src=""
                  alt="researchprove"
                  className="w-[56vw] h-40 sm:w-[38vw] px-5 md:h-60 bg-pink-300"
                />
              </div>
              <h1 className="px-3 mt-2">Project Name</h1>
              <div
                className="flex justify-end px-5
                mt-4"
              >
                <button className="px-3 py-2 bg-blue-500 rounded-md">
                  Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
