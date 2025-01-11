import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../../images/eco-light.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function CommunityPage() {
  const [visible, setVisible] = useState("");
  const [infoVisible, setInfoVisible] = useState(false);
  const { name } = useParams();
  const decodeName = decodeURIComponent(name);
  console.log(decodeName);
  const [community, setCommunity] = useState(() => {
    const savedCommunity = localStorage.getItem(decodeName);
    return savedCommunity ? JSON.parse(savedCommunity) : {};
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2024/api/community/${decodeName}`,
        { withCredentials: true }
      );
      setCommunity(response.data);
      localStorage.setItem(decodeName, JSON.stringify(response.data));

      console.log(response.data);
    } catch (error) {
      console.log("community data not found");
    }
  };
  useEffect(() => {
    fetchData();
    console.log(community);
  }, []);

  return (
    <div>
      {/* <h1>{community.name}</h1>
      <h2>{community.description}</h2>
      <h1>{community.code}</h1>
        <h1>Admin:{community.admin?.name}</h1>
        <h1>Admin email:{community.admin?.email}</h1>
      <h1> member list :-{
        
        community.members.map((member)=>(
          <div key={member.name}>
          <p>{member.name}</p>
          <p>{member.email}</p></div>
        ))
        }</h1> */}

      <div className="flex justify-between items-center px-16 mt-2">
        <div>
          <NavLink to="/Navbar/UserProfile">
            <button
              class="cursor-pointer duration-200 hover:scale-125 active:scale-100"
              title="Go Back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                class="stroke-blue-300"
              >
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="M11 6L5 12M5 12L11 18M5 12H19"
                ></path>
              </svg>
            </button>
          </NavLink>
        </div>
        <div className="">
          <h1 className="text-5xl h-14 text-center font-extrabold   bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
            {community.name}
          </h1>
          <p className="text-center text-zinc-600 text-lg ">
            {community.description}
          </p>
        </div>
        <div>
          <section
            onClick={() => setInfoVisible(!infoVisible)}
            class="relative flex cursor-pointer justify-center items-center"
          >
            <div class="group flex justify-center transition-all rounded-full bg-gray-200 p-1">
              <svg viewBox="0 0 320 512" class="w-6 h-6">
                <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
              </svg>
              <span class="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-md">
                Information
              </span>
            </div>
          </section>
          {infoVisible ? (
            <div className=" absolute right-4 flex justify-center z-40 mt-1  shadow-gray-400 rounded-b-lg shadow-lg  ">
              <div class="card font-sans bg-white rounded-lg overflow-hidden w-64   transform transition duration-500 hover:shadow-2xl">
                <div class="p-4 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-white">
                  <div class="flex justify-between items-center">
                    <div class="text-lg font-montserrat font-bold">
                      Social Media
                    </div>
                    <div class="flex items-center space-x-4">
                      <a href="#" target="_blank" class="hover:text-gray-100">
                        <FaLinkedin className="w-6 h-6  scale-200 ease-out transistion duration-300 hover:scale-75" />
                      </a>
                      <a href="#" target="_blank" class="hover:text-gray-200">
                        <FaGithub className="w-6 h-6  scale-200 ease-out transistion duration-300 hover:scale-75" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-6 font-montserrat">
                  <div class="text-black text-xl font-bold mb-2">
                    {community.name}
                  </div>
                  <div class="text-gray-700 mb-4">
                    <p className="text-sm">Admin: {community.admin.name}</p>
                    <p className="text-sm">Code: {community.code}</p>

                    <p className="text-sm">
                      Strength: {community.members.length}
                    </p>
                  </div>
                  <div className="flex  justify-between">
                    <div class="inline-block cursor-pointer font-mono text-sm font-bold bg-slate-500 text-white py-2 px-4 rounded-full transition ease-in-out delay-75 duration-100 hover:-translate-y-1 hover:scale-110 transform hover:opacity-75">
                      Edit
                    </div>

                    <button class="inline-flex items-center px-3 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-full hover:-translate-y-1 hover:scale-110">
                      <svg
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          stroke-width="2"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex mt-4  ">
        <div className="w-72  shadow-inner shadow-zinc-500  fixed h-screen">
          <h1 className="text-center mt-2 font-bold text-zinc-700 ">Members </h1>
          <div className="mt-4  flex flex-col justify-center items-center">
          {community.members.map((member)=>(
            <ul key={member.name} className=" w-full ">
            <li className="bg-zinc-700  text-zinc-100 p-2">{member.email}</li></ul>
          ))
          
          }</div>


        </div>
        <div className="shadow-inner shadow-zinc-500 h-screen  w-3/4 left-80 fixed">
          <ul className="flex  w-full justify-evenly items-center">
            <li
              onClick={() => setVisible("chat")}
              className=" cursor-pointer border border-zinc-300 w-full text-center p-2"
            >
              {" "}
              Chat
            </li>
            <li
              onClick={() => setVisible("task")}
              className=" cursor-pointer border border-zinc-300 w-full text-center p-2"
            >
              Daily Task
            </li>
            <li
              onClick={() => setVisible("code")}
              className="cursor-pointer border border-zinc-300 w-full text-center p-2"
            >
              {" "}
              Code Together
            </li>
          </ul>
          {visible === "chat" ? (
            <div>chatt</div>
          ) : visible === "task" ? (
            <div>task</div>
          ) : visible === "code" ? (
            <div>code</div>
          ) : (
            <div className="flex w-full h-full justify-center mt-32 text-5xl opacity-15 font-bold">
              <h1>What are you going to do Today?</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
