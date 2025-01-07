import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function JoinedCommunity() {
    const [communityList, setCommunityList] = useState([]);
  const navigate  = useNavigate();
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
    },[navigate])
    const enterCommunity=async(communityName)=>{
        navigate(`/community/${communityName}`)

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
                 
                 
                   
     <div className=' flex justify-center mt-2 '>           
<button onClick={()=>enterCommunity(community.name)}
  class="px-6 z-30 py-1 bg-rose-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
>
 Enter
</button></div> 



                       </div>
                </div>
            ))}</div>
   

    </div>
  )
}

export default JoinedCommunity

