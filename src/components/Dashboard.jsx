import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Frame from "./Frame";

function Dashboard() {
  const navigate = useNavigate();
  const [dataOfUser, setDataOfUser] = useState({
    email: "",
    name: "",
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(
          "https://codecom-backend.onrender.com/api/auth/check-Auth",
          {
            withCredentials: true,
          }
        );
      } catch (error) {
        console.error("User not logged in", error);
        navigate("/");
      }
    };

    checkAuth();
  }, [navigate]);
  // const fetchUserData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:2024/api/auth/check-Auth",
  //       { withCredentials: true }
  //     );
  //     setDataOfUser({
  //       name: response.data.user.name,
  //       email: response.data.user.email,
  //     });
  //     console.log("User data:", response.data);
  //     console.log(dataOfUser);
  //   } catch (error) {
  //     console.error("Failed to fetch user data", error);
  //   }
  // };

  return (
    <div className="min-h-screen w-full p-10   relative overflow-hidden">
      <div className="  ">
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
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" cursor-default flex flex-col mt-12  w-full  text-center h-full items-center"
      >
        <h1 className="text-9xl font-extrabold  bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          CodeCom
        </h1>
      </motion.div>

      <div className=" w-full gap-16 mt-20  flex justify-center  ">
        <div className=" w-[25%]">
          <div class=" cursor-default shadow-lg text-center  w-full rounded-xl hover:text-black hover:scale-110 duration-700 p-5">
            <h4 class="py-2 text-2xl font-bold  bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Create Community
            </h4>
            <p class="text-base leading-7   font-semibold space-y-4">
              Create Your own Community and Teach{" "}
            </p>

            <div class=" pb-2 flex justify-center">
              <button class="w-36 mt-4 h-10 font-semibold rounded-md shadow-lg border-2 border-gray-400 hover:scale-90 duration-500">
                Create
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[25%]">
          <div class=" cursor-default shadow-lg text-center  w-full rounded-xl hover:text-black   hover:scale-110 duration-700 p-5">
            <h4 class="py-2 text-2xl font-bold  bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Join Community
            </h4>
            <div>
              <input
                type="text"
                placeholder="Enter Code"
                className="p-2 border-gray-300 border-2 rounded mt-4 "
              />
            </div>

            <div class=" pb-2 flex justify-center">
              <button class="w-36 mt-4 h-10 font-semibold rounded-md shadow-lg border-2 border-gray-400 hover:scale-90 duration-500">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
