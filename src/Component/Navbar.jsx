import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Researchdropdown, Researchdropdown2 } from "../Data/Data";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const useDebouncedValue = (inputValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

const Navbar = () => {
  const [search, setsearch] = useState("");
  const [Researchdropdownopen, setResearchdropdown] = useState(false);
  const [Researchdropdownopen2, setResearchdropdown2] = useState(false);
  const [sidemenu, setsidemenu] = useState(false);
  const [Searchbtn, setSearchbtn] = useState(null);
  // const [active,setactive] = useState(false);
  const searchref = useRef();

  const HandleResearchopen = () => {
    setResearchdropdown(!Researchdropdownopen);
  };
  const HandleResearchopen2 = () => {
    setResearchdropdown2(!Researchdropdownopen2);
  };
  const debounce = useDebouncedValue(search, 300);

  const HandleSearchChange = (e) => {
    let result = e.target.value;
    setsearch(result);
  };

  useEffect(() => {
    //logic
  }, [debounce]);

  return (
    <div className="w-screen  bg-zinc-900 px-6 py-2 fixed ">
      <div className="h-20 flex justify-between items-center text-white capitalize">
        {/* nav-left */}
        <div className="flex  justify-between w-[50%] items-center">
          <div className=" relative">
            <img src="" alt="bpit" className="sm:block hidden" />
            <span className="absolute -top-3 text-xl text-white sm:hidden  will-change-transform duration-700 ease-in-out">
              <RxHamburgerMenu onClick={() => setsidemenu(!sidemenu)} className=" cursor-pointer" />
              {sidemenu && (
                <div className=" bg-[#3837373e] w-40 h-32 px-3  py-4  flex flex-col gap-5  mt-5 rounded-md">
                  <div className="relative ">
                    <h1
                      className="font-serif text-xl cursor-pointer transform duration-800 ease-in-out"
                      onClick={() => HandleResearchopen()}
                    >
                      research
                    </h1>
                    {Researchdropdownopen && (
                      <div className="absolute top-8 left-10 rounded-md px-5 py-4 bg-zinc-700 w-52 h-auto z-10">
                        <ul>
                          {Researchdropdown.map((item) => (
                            <li key={item.id} className="text-xl mt-3">
                              <Link to={item.to}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <h1
                      className="font-serif text-xl cursor-pointer transform duration-800 ease-in-out"
                      onClick={() => HandleResearchopen2()}
                    >
                      Publications
                    </h1>
                    {Researchdropdownopen2 && (
                      <div className="absolute top-10 left-6 rounded-md  bg-zinc-600 w-52 h-32 flex flex-col justify-center items-center">
                        <ul>
                          {Researchdropdown2.map((item) => (
                            <li key={item.id} className="text-xl mt-3">
                              <Link to={item.to}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </span>
          </div>

          <div className="relative sm:block hidden ">
            <h1
              className="font-serif text-xl cursor-pointer transform duration-800 ease-in-out"
              onClick={() => HandleResearchopen()}
            >
              research
            </h1>
            {Researchdropdownopen && (
              <div className="absolute top-10 -left-10 rounded-md px-5 py-4  bg-[#bab8b811] w-52 h-auto">
                <ul>
                  {Researchdropdown.map((item) => (
                    <li key={item.id} className="text-xl mt-3">
                      <Link to={item.to}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative sm:block hidden">
            <h1
              className="font-serif text-xl cursor-pointer transform duration-800 ease-in-out"
              onClick={() => HandleResearchopen2()}
            >
              Publications
            </h1>
            {Researchdropdownopen2 && (
              <div className="absolute top-12 -left-10 rounded-md px-5 py-4 bg-[#bab8b811] w-52 h-32">
                <ul>
                  {Researchdropdown2.map((item) => (
                    <li key={item.id} className="text-xl mt-3">
                      <Link to={item.to}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* search  */}
        <div className="flex gap-10 w-[50%] justify-end ">
          <div className="flex items-center relative ">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={HandleSearchChange}
              ref={searchref}
              className="w-32 sm:w-40 md:w-60 px-3 py-1 md:px-3 md:py-2 text-black outline-none rounded-md"
            />
            <span
              className="absolute sm:top-2 top-3 right-2 cursor-pointer sm:right-2 text-black font-bold text-[18px] sm:text-[20px]"
              onClick={() => setSearchbtn(searchref.current.focus())}
            >
              <FiSearch />{" "}
            </span>
          </div>

          {/* login */}

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            <Link to="/">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
