import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function CreatedCommunity() {
  const [communityList, setCommunityList] = useState([]);
const navigate =useNavigate()
  const createdCommunityList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:2024/api/community/getCreatedCommunity",
        { withCredentials: true }
      );
      setCommunityList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const enterCommunity=(communityName)=>{
    navigate(`/community/${communityName}`)
  }
  useEffect(() => {
    createdCommunityList();
  }, [navigate]);

  return (
    <div>
      <div className="flex flex-col gap-6">
        {communityList.map((community) => (
          <div
            key={community._id}
            className=" w-full bg-whiteflex    shadow-inner  shadow-gray-700 p-2 px-6 rounded-xl "
          >
            <p className="text-center font-bold text-xl bg-gradient-to-r from-orange-400  to-purple-500 bg-clip-text text-transparent">
              {" "}
              {community.name}
            </p>
            <div className="flex justify-between w-full">
              <div>
            <p className="font-bold text-zinc-600">
              {" "}
              Admin:{" "}
              <span className="font-normal text-zinc-500">
                {" "}
                {community.admin.name}
              </span>
            </p>
            <p className="font-bold text-zinc-600">
              {" "}
              Email:{" "}
              <span className="font-normal text-zinc-500">
                {" "}
                {community.admin.email}
              </span>
            </p></div>
            <div className="flex justify-center mt-2 ">
              <button
                onClick={() => enterCommunity(community.name)}
                class="px-6 z-30 py-1 bg-rose-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
              >
                Enter
              </button>
            </div></div>
            <p className="font-normal mt-2 text-sm flex text-zinc-700 justify-center items-center">
              <FaFireFlameCurved color="orange" /> _{community.description}_
              <FaFireFlameCurved color="red" />
            </p>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatedCommunity;
