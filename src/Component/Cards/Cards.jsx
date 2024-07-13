import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    username: "example_user_2",
    likes: 150,
    id: 2,
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
    <div className="w-screen h-auto px-5 py-2 overflow-hidden bg-zinc-800">
      <div className="w-screen flex gap-5 p-2 md:p-2 overflow-x-auto relative">
        {items.map((items, id) => (
          <div
            key={id}
            className="md:w-[20vw] md:h-[48vh] sm:w-[40vw] sm:h-[44vh] w-[70vw] h-[45vh]  bg-[#3e4a5b] rounded-md"
          >
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
              <div className="w-[13vw]  sm:w-[12vw]  flex   md:justify-between relative ">
                <div className="flex justify-start  flex-col">
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
                mt-1"
            >
              <Link to="/viewresearch">
                <button className="text-white px-3 py-2 bg-blue-500 rounded-md">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
