import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
function CreatedCommunity() {
  const [communityList, setCommunityList] = useState([]);
 
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
}
  useEffect(() => {
    createdCommunityList();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6">
       
       
          {communityList.map((community) => (
            <div key={community._id} className=" w-full bg-whiteflex    shadow-inner  shadow-gray-700 p-2 px-6 rounded-xl ">
         
                <p className="text-center font-bold text-xl bg-gradient-to-r from-orange-400  to-purple-500 bg-clip-text text-transparent">  {community.name}</p>
                <p className="font-bold text-zinc-600"> Admin: <span className="font-normal text-zinc-500">  {community.admin.name}</span></p>
                <p className="font-bold text-zinc-600"> Email: <span className="font-normal text-zinc-500"> {community.admin.email}</span></p>
                <p className="font-normal mt-2 text-sm flex text-zinc-700 justify-center items-center"><FaFireFlameCurved color="orange" /> _{community.description}_<FaFireFlameCurved  color="red"/></p>
            
            </div>
          ))}
        </div>
 
    </div>
  );
}

export default CreatedCommunity;
