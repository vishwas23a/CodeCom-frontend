import React from 'react'

function UserProfileCard(props) {
    const {userEmail,userImage,userName,userNumber,visibleValue}=props
  
  return (
  
      <div className="rounded-xl p-2 shadow-lg w-4/5  bg-white ">
            <h1 className=" text-2xl font-bold text-center  bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              User Profile
            </h1>

            <div className=" mt-2    flex flex-col items-center">


              <img src={userImage} className="border-2 rounded-full w-44 h-44" alt="" />
              <div className="w-full px-12 mt-4 flex flex-col gap-4">
              <h1>Name : {userName}</h1>
              <h1>Email :  {userEmail}</h1>
              <h1>Phone : {userNumber}</h1></div>
<button onClick={visibleValue}
  class="flex mt-4 overflow-hidden ring-[5px] ring-white w-[5.1rem] hover:w-[6.5rem] items-center gap-2 cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-5 py-2 rounded-full transition-all ease-in-out hover:scale hover:scale-105 font-[revert] active:scale-100 shadow-lg"
>  Edit
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
</button>

            </div>
          </div>

  )
}

export default UserProfileCard
