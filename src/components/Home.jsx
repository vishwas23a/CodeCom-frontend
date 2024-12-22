import React, { useEffect, useRef, useState } from "react";
import Frame from "./Frame";
import { motion } from "framer-motion";
import comImage from "../images/com-image.png";
import SignUpAndLogin from "./SignUpAndLogin";

function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "purple",
      opacity: 0.3,
      transition:
        "height 0.3s ease-in-out, width 0.3s ease-in-out, background-color 0.3s ease-in-out, opacity 0.3s ease-in-out",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const [showSignUp, setShowSignUp] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowSignUp(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef]);
  return (
    <>
      <div className="min-h-screen w-full p-10      relative overflow-hidden">
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

        <div className="border   border-orange-200 w-full h-[500px] rounded-xl ">
          <div className=" flex justify-between items-center  mt-4 px-10">
            <div>
              <img src={comImage} alt="" className="h-14 w-14" />
            </div>
            <button
              onClick={() => setShowSignUp(true)}
              class="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base"
            >
              <span class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px"></span>

              <span class="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"></span>

              <div class="relative flex items-center justify-between py-2  px-4  text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
                <span class="select-none ">SignUp/Login</span>
              </div>
            </button>
          </div>

          <div className="flex">
            <motion.div
              className="cursor bg-orange-300 rounded-full bg-transparent fixed top-0 left-0 pointer-events-none"
              variants={variants}
              animate={cursorVariant}
              style={{ width: "24px", height: "24px" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" cursor-default flex flex-col mt-12  w-full  text-center h-full items-center"
            >
              <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-300 to-red-500 bg-clip-text text-transparent">
                Welcome To{" "}
              </h1>
              <h1
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-9xl font-extrabold  bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent"
              >
                CodeCom
              </h1>
              <p className="px-16 text-lg text-center mt-4 font-semibold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Join a vibrant community of coders, collaborate on projects, and
                level up your skills together. Whether you're a beginner or an
                expert, connect with like-minded learners, share knowledge, and
                grow in a supportive environment. Start coding, learning, and
                building today!
              </p>
            </motion.div>

            {showSignUp && (
              <motion.div
                className="w-3/4 z-20"
                ref={formRef}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <SignUpAndLogin />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
