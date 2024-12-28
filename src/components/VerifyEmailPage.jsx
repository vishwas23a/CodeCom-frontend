import React, { useState } from "react";
import Frame from "./Frame";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function VerifyEmailPage() {
  const [inputData, setInputData] = useState("");
  const navigate=useNavigate();

  const handleVerify=async(e)=>{
    e.preventDefault();
    try {
    await  axios
        .post("http://localhost:2024/api/auth/verify-email", {code:inputData})
        .then((response) => {
          console.log(response);
  
          toast.success("Verification successfully", { autoClose: 1000 });
          setInputData("");
        });
        setTimeout(() => {

          navigate('/')
        },3000)
    } catch (error) {

      toast.error("Invalid Code", { autoClose: 1000 });
    }

  }
 const handleInput=(e)=>{
  setInputData(e.target.value);
 }
  


  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        transition={Slide}
       />
      <div className="h-screen w-full p-10     bg-gradient-to-br from-yellow-100 via-orange-100 to-purple-200  relative overflow-hidden">
        <Frame
          color="bg-red-400"
          size="w-48 h-48"
          top="-5%"
          left="5%"
          delay={0}
        />
        <Frame
          color="bg-green-400"
          size="w-48 h-48"
          top="-5%"
          left="60%"
          delay={2}
        />

        <Frame
          color="bg-green-400"
          size="w-48 h-48"
          top="60%"
          left="5%"
          delay={1}
        />
        <Frame
          color="bg-red-400"
          size="w-48 h-48"
          top="60%"
          left="80%"
          delay={5}
        />

        <div className=" w-full  h-full flex justify-center items-center  ">
          <div className=" h-max p-2  w-72   bg-white rounded-xl flex items-center pb-12 justify-center gap-4  flex-col  ">
            <div className="w-full flex justify-end mr-6 ">
            <h1 onClick={()=> navigate('/')} className="font-extrabold cursor-pointer text-2xl">X</h1>
            </div> 
              <h1 className="text-center bg-gradient-to-r from-orange-500 to-purple-700 bg-clip-text text-transparent font-semibold text-2xl">Enter Verification Code</h1>
              <div> 
      
           
              <input
                type="text"
                maxLength={6}
              required      
                name="code"
                onChange={handleInput}
                value={inputData}
                placeholder="Code"
                className="p-3  border border-black focus:outline-none focus:ring-2   focus:ring-orange-300 rounded-xl"
              />
                    <p className=" text-sm text-center">Check Your mail</p>
            </div>
            <div className="flex justify-center pb-4">
              <button
                onClick={handleVerify}
                class="cursor-pointer absolute transition-all 
bg-gray-700 text-white px-6 py-2 rounded-lg
border-orange-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-orange-300 shadow-orange-300 active:shadow-none"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
