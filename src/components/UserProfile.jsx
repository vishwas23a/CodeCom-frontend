import React, { useEffect, useState } from "react";
import userBack from "../images/userBack.png";
import axios from "axios";

import UserEditCard from "./UserEditCard";
import UserProfileCardd from "./UserProfileCardd";

function UserProfile() {

  const [visible,setVisible]=useState(true) 
  const [userData, setUserData]=useState(
    {
      name:"",
      email:"",
      number:""
    }
  )

    const fetchedData=async()=>{
      try {
        console.log("hello");
        
        const resp= await axios.get("https://codecom-backend.onrender.com/api/user/userProfile",{withCredentials:true})
        console.log(resp.data);
        setUserData(
          {
            name:resp.data.name,
           email:resp.data.email,
           number:resp.data.number
          }
        )
      } catch (error) {
        console.log(error);
        
      }
        
         
  }
  useEffect(()=>{
  fetchedData();  
},[])  
const handleUpdate=()=>{
  fetchedData();
}


  return (
    <div>
      <img
        src={userBack}
        className="w-screen h-screen fixed -z-10 opacity-80"
        alt=""
      />

      <div className=" w-full flex justify-center items-center h-screen">
        <div className=" rounded-3xl w-[85%] mt-10  bg-opacity-10 bg-black  h-[85%] flex gap-8 p-8">
          {visible ===true ?

<UserProfileCardd 
userName={userData.name}
userEmail={userData.email}
userNumber={userData.number}
userImage=""
visibleValue={()=>setVisible(false)}
/>
          :
           <UserEditCard 
           userInputEmail={userData.email}
           onUpdate={handleUpdate}
           visibility={()=>setVisible(true)}
           />
          }
          <div className=" flex flex-col justify-between  w-full ">
            <div className=" bg-white h-52 shadow-lg  w-full rounded-xl ">
              <h1 className="font-bold text-center text-xl  bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                My Communuty
              </h1>
            </div>
            <div className=" bg-white shadow-lg  h-52 rounded-xl w-full">
              <h1 className="font-bold text-center text-xl  bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Joined Community
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
