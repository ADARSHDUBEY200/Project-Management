import React, { useState } from "react";


const UserInfo = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    Lastname: "",
    email: "",
    phonenumber: "",
    department: "",
    rollNumber: "",
    batchstart: "",
    batchend: "",
    github: "",
    linkdin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

 
  return (
    <div className="w-[95vw] h-[80vh] px-10 overflow-hidden relative">
        <div className="absolute pointer-events-none top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"> 
            <h1 className=" opacity-[.1]  text-[25vw] font-serif uppercase">Bpit</h1>
        </div>
      <form>
        <div className="max-w-screen-lg  p-8 flex flex-col bg-[#605e5e2e] rounded-xl  items-center h-screen mx-auto text-black">
          <div className="flex gap-[10vw] mb-10">
            <div>
              <label className="flex text-md font-medium text-white">
                Faculty Name
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Username..."
                required
                className="mt-1 px-3 py-2 outline-none  w-[16vw] rounded-md"
              />
            </div>
            <div>
              <label className="flex text-md font-medium text-white">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.Lastname}
                onChange={handleChange}
                placeholder="Lastname..."
                required
                className="mt-1  w-[16vw] outline-none rounded-md px-3 py-2 "
              />
            </div>
          </div>
          <div className=" flex gap-[10vw] mb-10">
            <div>
              <label className="flex text-md font-medium text-white">
                Email Name
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email..."
                required
                className="mt-1 w-[16vw]  rounded-md px-3 py-2 outline-none"
              />
            </div>
            <div>
              <label className="flex text-md font-medium text-white">
                Phone Number
              </label>
              <input
                type="text"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleChange}
                placeholder="Phone no."
                required
                className="mt-1  w-[16vw] outline-none rounded-md px-3 py-2 "
              />
            </div>
          </div>

          <div className="w-full px-20 mb-10">
            <label className="flex text-md font-medium text-white">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Department..."
              required
              className="mt-1  w-[70%] outline-none rounded-md px-3 py-2 "
            />
          </div>
          <div className="w-full  px-20 mb-10 ">
            <label className="flex text-md font-medium text-white">
              Year of Graduation
            </label>
            <div className="flex justify-between ">
              <div className="mt-5">
                <h1 className="text-white">Start</h1>
                <input
                  type="Date"
                  name="batchstart"
                  value={formData.batchstart}
                  onChange={handleChange}
                  required
                  className="mt-1  w-[10vw] outline-none rounded-md px-3 py-2 "
                />
              </div>
              <div className="mt-5">
                <h1 className="text-white">End</h1>
                <input
                  type="Date"
                  name="batchend"
                  value={formData.batchend}
                  onChange={handleChange}
                  required
                  className="mt-1  w-[10vw] outline-none rounded-md px-3 py-2 "
                />
              </div>
            </div>
          </div>

          <div className=" flex gap-[10vw]">
            <div>
              <label className="flex text-md font-medium text-white">
                Github
              </label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="Link..."
                required
                className="mt-1  w-[16vw] outline-none  rounded-md px-3 py-2 "
              />
            </div>
            <div>
              <label className="flex text-md font-medium text-white">
                Linkdin
              </label>
              <input
                type="url"
                name="linkdin"
                value={formData.linkdin}
                onChange={handleChange}
                placeholder="Link..."
                required
                className="mt-1  w-[16vw] outline-none rounded-md px-3 py-2 "
              />
            </div>
          </div>
          <div className="flex fle-col w-full px-20 mt-16">
            <button
              type="reset"
              className="w-fit h-fit px-4 py-3 cursor-pointer mt-8 text-white font-bold rounded-md bg-gray-400"
              onClick={() => setFormData("")}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
