import { createContext, useState } from "react";

export const UserForm = createContext();

const Context = (props) => {
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
    faculty: "",
    Research: "",
    researchstart: "",
    researchend: "",
    aboutResearch:""
  });

  const handleSubmit = () => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <UserForm.Provider value={[formData, setFormData,handleSubmit]}>
      {props.children}
    </UserForm.Provider>
  );
};

export default Context;
