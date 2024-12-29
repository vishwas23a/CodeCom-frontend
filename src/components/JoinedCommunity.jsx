import axios from 'axios';
import React, { useEffect, useState } from 'react'


function JoinedCommunity() {
    const [communityList, setCommunityList] = useState([]);

    const fetchedData = async () => {
        try {
            const response=await  axios.get("http://localhost:2024/api/community/getJoinedCommunity",{withCredentials:true})

            setCommunityList(response.data)

        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        fetchedData();
    },[])
    const enterCommunity=async(communityId)=>{
        navigate(`/community/${communityId}`)

    }

  return (
    <div>


       
              <div className='flex flex-col gap-6 '>

            {communityList.map((community)=>(

                <div key={community._id}className=" w-full bg-whiteflex    shadow-inner  shadow-gray-700 p-4 px-10 rounded-xl ">
                   
                   <div className='flex justify-between w-full'>
                    <div>
                    <p ><span className='bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent font-bold text-lg  '>{community.name}</span></p>
                    <p className='font-bold text-zinc-600'>Admin: <span className='font-normal text-zinc-500'>{community.admin.name}</span> </p></div>
                 
                 
                   
                
<button
  class="group relative inline-flex items-center justify-center px-4 py-1 text-md font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-60"
>
  <div
    class="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:scale-70 animate-gradient"
  ></div>

  <div
    class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-white blur-xl"
  ></div>

  <div class="absolute inset-0 overflow-hidden rounded-full">
    <div class="glitter-container">
      <div class="glitter"></div>
      <div class="glitter"></div>
      <div class="glitter"></div>
    </div>
  </div>

  <div
    class="absolute inset-0 rounded-full border-2 border-white opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-300"
  ></div>

  <div class="absolute inset-0 rounded-full overflow-hidden">
    <div class="wave"></div>
  </div>

  <span class="relative z-10 flex items-center gap-1">
    <span class="tracking-wider">Enter!</span>
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M13 7l5 5m0 0l-5 5m5-5H6"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    <span
      class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
    ></span>
  </span>
</button>


                       </div>
                </div>
            ))}</div>
   

    </div>
  )
}

export default JoinedCommunity

