import React, { useState } from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";

const AddResearch = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    department: "",
    rollNumber: "",
    batch: "",
    startSubmission: "",
    endSubmission: "",
    researchDetails: "",
    topicName: "",
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
    // Handle form submission logic here
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
    <div className="w-screen h-screen bg-zinc-800  overflow-hidden">
      <Navbar />

      <div className="w-screen h-screen flex gap-10">
        <div className="w-[40%] sticky flex justify-start items-center flex-col gap-4 py-10 bg-red-600">
          <img
            src="https://images.unsplash.com/photo-1720170494675-e2dcd6de34a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
            alt="img"
            className="w-64 h-64 rounded-full"
          />
          <button className="bg-blue-400 cursor-pointer px-3 py-2 rounded-md text-black w-[10vw]">
            Edit
          </button>
        </div>

        <div className=" p-8 rounded shadow-lg  max-w-full w-screen ">
          <div>
            <h2 className="text-2xl font-800 font-serif mb-4 text-center text-white">
              Research Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap  items-center justify-evenly p-5">
                <div className="mb-4">
                  <label className="block text-md font-medium text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username..."
                    className="mt-1  w-[20vw] border-gray-300 rounded-md px-3 py-2 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-md font-medium text-white">
                    Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Department..."
                    className="mt-1  w-[20vw] border-gray-300 rounded-md px-3 py-2 sm:text-sm"
                  />
                </div>
              </div>
              <div className=" flex flex-wrap items-center justify-evenly p-5">
                <div className="mb-4">
                  <label className="flex text-sm font-medium text-white">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    placeholder="Roll Number..."
                    className="mt-1  w-[20vw] border-gray-300 rounded-md px-3 py-2 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex text-sm font-medium text-white">
                    Batch
                  </label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    placeholder="Batch..."
                    className="mt-1  w-[20vw] border-gray-300 rounded-md px-3 py-2 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="flex flex-col text-sm font-medium text-white">
                  Start of Project Submission
                </label>
                <input
                  type="text"
                  name="startSubmission"
                  value={formData.startSubmission}
                  onChange={handleChange}
                  className="mt-1  w-[20vw] border-gray-300 rounded-md px-3 py-2 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  End of Project Submission
                </label>
                <input
                  type="text"
                  name="endSubmission"
                  value={formData.endSubmission}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md px-3 py-2 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Research Details
                </label>
                <textarea
                  name="researchDetails"
                  value={formData.researchDetails}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md px-3 py-2 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Topic Name
                </label>
                <input
                  type="text"
                  name="topicName"
                  value={formData.topicName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md px-3 py-2 sm:text-sm"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResearch;

// div className="w-full px-4 mb-4 flex  flex-col  justify-start items-center mt-5">
{
  /* <label
htmlFor="transcript"
className="flex mb-1 font-medium text-white"
>
Transcript Upload
</label>
<div className="w-[40%] h-40 flex items-center justify-center bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg py-6">
<div className="text-center">
  <div {...getRootProps()} className="dropzone">
    <input {...getInputProps()} />
    {profilePhoto ? (
      <img
        src={profilePhoto}
        alt="Profile"
        className="profile-photo"
      />
    ) : (
      <p>
        Drag 'n' drop a profile photo here, or click to
        select one
      </p>
    )}
    {/* <svg
    className="mx-auto w-12 h-12 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg> */
}
//   </div>
// </div>
// </div>
// </div> */}
