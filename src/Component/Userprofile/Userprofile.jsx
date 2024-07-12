import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const data = [
  {
    username: "example_user",
    likes: 150,
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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
    id: 1,
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

const pastdata = [
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
];

const Userprogile = () => {
  const [open, setopen] = useState(false);
  const [items, setitems] = useState(data);

  const handleclick = (id) => {
    data.forEach((item) => {
      if (item.id === id) {
        console.log(item.id);
        setopen((prevOpen) => ({
          ...prevOpen,
          [item.id]: !prevOpen[item.id],
        }));
      }
    });
  };

  const removecard = (itemId) => {
    const updatedData = items.filter((item) => item.id !== itemId);
    setitems(updatedData);
  };
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div className=" h-screen bg-zinc-900 flex overflow-hidden">
        <div className="w-[18%] flex flex-col gap-3 p-3  border-r-[1px] border-zinc-700">
          <div className=" h-[30%] flex text-white items-center flex-col mt-10">
            <h1 className="text-xl ">User Profile</h1>
            <div className="mt-4 ">
              <img
                className="w-32 h-32 rounded-md"
                src="https://plus.unsplash.com/premium_vector-1719858610096-bba4498e5fc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <h1 className="mt-4 text-xl">User Name</h1>
          </div>
          <div className=" h-[50%]  text-white px-10">
            <h1 className="text-2xl  p-3 text-center">Contact</h1>
            <h2 className="text-xl py-3">
              Researcher:
              <div className="flex flex-col mt-3">
                <li>Researcher Name</li>
                <li>Researcher Name</li>
                <li>Researcher Name</li>
              </div>
            </h2>
            <div className="mt-5">
              <h2 className="text-xl py-3 ">Phone Number</h2>
              <span>+91</span>
              <h2 className="text-xl py-3 ">Email ID:</h2>
              <h2 className="text-xl py-3 ">LinkedIn ID:</h2>
            </div>
          </div>
        </div>
        <div className="w-[80%] p-4 flex flex-col">
          <div className="h-[60%] ">
            <h1 className="text-3xl uppercase text-white mb-5 mt-1">
              Ongoing Research
            </h1>
            <div className="w-full flex gap-5 p-2 md:p-2 overflow-x-auto relative">
              {items.map((items) => (
                <div
                  key={items.id}
                  className="md:w-[20vw] md:h-[46vh] sm:w-[40vw] sm:h-[44vh] w-[70vw] h-[45vh]  bg-[#3e4a5b] rounded-md"
                >
                  <div className="flex w-[70vw] h-fit gap-5 items-center">
                    <div className="w-fit p-2 ">
                      <Link to="/user">
                        <img
                          className="w-10 h-10 md:w-16 md:h-16 sm:w-10 sm:h-10 object-cover cursor-pointer  object-center rounded-full"
                          src="https://plus.unsplash.com/premium_vector-1719858610096-bba4498e5fc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="w-[13vw]  sm:w-[12vw]  flex   md:justify-between  text-white relative">
                      <div className="flex justify-start  flex-col ">
                        <h1 className=" text-sm md:text-lg font-serif">
                          {items.username}
                        </h1>
                        <h1 className="text-sm">{items.likes}</h1>
                      </div>
                      <div>
                        <span
                          className="cursor-pointer"
                          onClick={() => handleclick(items.id)}
                        >
                          ...
                        </span>
                        {open[items.id] && (
                          <div className="absolute top-5 -right-28  p-5 w-[200px] rounded-md text-white">
                            <button
                              onClick={() => removecard(items.id)}
                              className="bg-blue-500 px-3 py-2 rounded-md"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="img  flex justify-center items-center mt-5 text-white">
                    <img
                      src=""
                      alt="researchprove"
                      className="w-[56vw] h-40 sm:w-[38vw] px-5 md:h-60 bg-zinc-300"
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
          <div className="  h-[40%] overflow-y-auto">
            <h1 className="text-3xl uppercase text-white mb-5 mt-3">
              Past Research
            </h1>
            <div className="w-full h-auto flex flex-wrap gap-5 overflow-x-auto overflow-y-auto ">
              {pastdata.map((items) => (
                <div className="w-[20vw] h-20 bg-zinc-300 rounded-lg flex items-center">
                  <div className="p-5">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={items.img}
                      alt=""
                    />
                  </div>
                  <div className="w-72 flex justify-between items-center">
                    <div className="flex-col flex">
                      <h1 className=" text-sm md:text-lg font-serif">
                        {items.researchname}
                      </h1>
                      <h1 className="text-sm">{items.likes}</h1>
                    </div>
                    <div>
                      <Link>
                        <button className=" text-white py-2 px-3 bg-blue-500 rounded-md">
                          view
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Userprogile;
