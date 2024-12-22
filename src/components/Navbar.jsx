import React, { useEffect, useRef, useState } from "react";
import logo from "../images/eco-light.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import user from "../images/user.png";
import { IoIosLogOut } from "react-icons/io";
function Navbar() {
  const dropDown = useRef(null);
  const [visible, setVisible] = useState(false);
  const closeProfile = (e) => {
    if (dropDown.current && !dropDown.current.contains(e.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeProfile);
    return () => document.removeEventListener("click", closeProfile);
  }, []);

  const userProfile = () => {
    setVisible(true);
  };

  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.post(
        "http://localhost:2024/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <div>
      <nav className="flex w-full justify-between items-center px-6  py-2 h-14 bg-opacity-20 bg-transparent fixed z-20 ">
        <img src={logo} className="h-10 w-10" alt="" />
        <div className="flex gap-24 justify-between ">
          <ul className=" flex gap-8 items-center ">
            <NavLink to="Home">
              {" "}
              <li>Home</li>
            </NavLink>
            <NavLink to="About">
              {" "}
              <li>About</li>
            </NavLink>
            <NavLink to="Contact">
              {" "}
              <li>Contact</li>
            </NavLink>
          </ul>
          <div ref={dropDown} className="relative">
            <button onClick={userProfile}>
              <img src={user} className="h-10 w-10" alt="" />
            </button>

            {visible && (
              <div className=" shadow-xl bg-white absolute mt-2 rounded-lg  right-2  w-32 h-max ">
                <ul>
                 <NavLink to="UserProfile"> <li className="px-4 flex  justify-center items-center py-2  text-gray-700 hover:text-white rounded-t-lg cursor-pointer hover:bg-gray-700 ">
                    View Profile
                  </li></NavLink>
                  <li
                    className="px-4 py-2 text-gray-700 hover:text-white flex w-full items-center justify-center rounded-b-lg gap-3   cursor-pointer hover:bg-gray-700 "
                    onClick={logout}
                  >
                    Logout <IoIosLogOut />{" "}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
