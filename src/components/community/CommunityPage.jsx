import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function CommunityPage() {

  const {name}=useParams();
  const decodeName=decodeURIComponent(name);
  console.log(decodeName);
  const [community,setCommunity]=useState(()=>{
    const savedCommunity = localStorage.getItem(decodeName);
    return savedCommunity ? JSON.parse(savedCommunity) : {};
  });
  
  const fetchData=async()=>{
    try {
      const response= await axios.get(`http://localhost:2024/api/community/${decodeName}`,{withCredentials:true})
      setCommunity(response.data);  
      localStorage.setItem(decodeName, JSON.stringify(response.data));

      console.log(response.data);
   
      

      
    } catch (error) {
      console.log("community data not found");
      
      
    }
  }
  useEffect(()=>{
    fetchData();
    console.log(community);
    

  },[])

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

         
    </div>
  )
}

export default CommunityPage
