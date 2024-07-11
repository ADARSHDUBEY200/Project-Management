import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const Researchinfo = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const [formData, setFormData] = useState({
    faculty: "",
    Research: "",
    email: "",
    phonenumber: "",
    department: "",
    rollNumber: "",
    researchstart: "",
    researchend: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const onDrop = (acceptedFiles) => {
    setProfilePhoto(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[95vw] h-[80vh] px-10 overflow-hidden relative">
      <div className="absolute pointer-events-none top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <h1 className=" opacity-[.1] select-none text-[25vw] font-serif uppercase">
          Bpit
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="max-w-screen-xl  p-8 flex flex-col bg-[#403e3e41] rounded-xl  items-center h-screen mx-auto text-black">
          <div className="flex gap-[10vw] mb-10">
            <div>
              <label className="flex text-md font-medium text-white">
                Faculty Name
              </label>
              <input
                type="text"
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                placeholder="Faculty Name..."
                required
                className="mt-1 px-3 py-2 outline-none  w-[16vw] rounded-md"
              />
            </div>
            <div>
              <label className="flex text-md font-medium text-white">
                Topic
              </label>
              <input
                type="text"
                name="Research"
                value={formData.Research}
                onChange={handleChange}
                placeholder="Research..."
                required
                className="mt-1  w-[16vw] outline-none rounded-md px-3 py-2 "
              />
            </div>
          </div>

          <div className="w-full flex justify-center   mb-5">
            <div {...getRootProps()} className="profile-image-wrapper">
              <input {...getInputProps()} className="hidden-input" />
              <img
                src={profilePhoto || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-52 object-cover rounded-sm"
              />
            </div>
          </div>

          <div className="w-full  px-20 mb-10 ">
            <label className="flex text-md font-medium text-white">
              Research
            </label>
            <div className="flex justify-between ">
              <div className="mt-5">
                <h1 className="text-white">Start</h1>
                <input
                  type="Date"
                  name="researchstart"
                  value={formData.researchstart}
                  onChange={handleChange}
                  required
                  className="mt-1  w-[10vw] outline-none rounded-md px-3 py-2 "
                />
              </div>
              <div className="mt-5">
                <h1 className="text-white">End</h1>
                <input
                  type="Date"
                  name="researchend"
                  value={formData.researchend}
                  onChange={handleChange}
                  required
                  className="mt-1  w-[10vw] outline-none rounded-md px-3 py-2 "
                />
              </div>
            </div>
          </div>

          <div className="w-full px-20 ">
            <label className="flex text-md font-medium text-white">
              About Research
            </label>
            <textarea
              name=""
              rows="5"
              className="w-full outline-none px-5 py-4 overflow-scroll"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Researchinfo;
