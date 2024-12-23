import axios from "axios";
import React, { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UserEditCard(props) {
  const { userInputEmail,visibility } = props;
  const [userInputData, setUserInputData] = useState({
    inputName: "",
    inputNumber: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const updateData = async(e) => {

    e.preventDefault();
    const payload = {};
    if (userInputData.inputName) payload.inputName = userInputData.inputName;
    if (userInputData.inputNumber) payload.inputNumber = userInputData.inputNumber;
  
    if (Object.keys(payload).length === 0) {
      toast.warn("No changes to update",{autoClose:1000});
      setTimeout(()=>{
        visibility();
    },2000)
    
      return;
    }
 
    try {
      console.log(userInputData);
    const data= await  axios.post("http://localhost:2024/api/user/updateUser",payload,{withCredentials: true})
    console.log(data);
    
    toast.success("Updated Successfully",{autoClose:1000})
    setUserInputData({
      ...(payload.inputName ? { inputName: "" } : {}),
      ...(payload.inputNumber ? { inputNumber: "" } : {})
    })

    setTimeout(()=>{
        visibility();
    },2000)
    
      
    } catch (error) {
      console.log(error," error updating details");
      
      
    }



   
  };
  return (
    <div className="rounded-xl p-2  shadow-lg w-4/5 bg-white ">
        <ToastContainer transition={Slide} />
      <h1 className=" text-2xl font-bold text-center  bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
        {" "}
        Edit Profile
      </h1>
      <div className="flex flex-col  px-12 gap-4  ">
        <div className="w-full flex justify-center">
          <img src="" className="border-2 mt-1 rounded-full w-44 h-44" alt="" />
        </div>
        <div className="flex flex-col gap-3 ">
            <span className="flex gap-4">
          <label> Name : </label>
          <input
            type="text"
            value={userInputData.inputName}
            onChange={handleInput}
            name="inputName"
            placeholder="Enter Name"
                className=" px-2 py-1 bg-gray-100 focus:ring-gray-400 focus:ring-2 focus:outline-none rounded-lg"
          /></span>
          <span className="flex gap-4">
          <label>Email : </label>
          <input     className=" px-4 py-1 bg-gray-100 focus:ring-gray-400 focus:ring-2 focus:outline-none rounded-lg" type="email" placeholder={userInputEmail} readOnly /></span>
          <span className="flex gap-4">
          <label> Number : </label>
          <input
          className=" px-2 py-1 bg-gray-100 focus:ring-gray-400 focus:ring-2 focus:outline-none rounded-lg"
            type="number"
            name="inputNumber"
            value={userInputData.inputNumber}
            onChange={handleInput}
            placeholder="Enter Number"
          /></span>
        </div>
        <div className="flex justify-center">
        <button onClick={updateData}
  class="flex  overflow-hidden ring-[5px] ring-white w-[5.1rem] hover:w-[6.5rem] items-center text-center gap-1 cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-3 py-2 rounded-full transition-all ease-in-out hover:scale hover:scale-105 font-[revert] active:scale-100 shadow-lg"
>  Update
  <svg
    class="size-6 mt-0.5"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
</button></div>
      </div>
    </div>
  );
}

export default UserEditCard;
