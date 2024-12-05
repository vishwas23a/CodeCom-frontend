import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
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
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="App flex items-center justify-center h-screen bg-yellow-400">
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="text-9xl"
      >
        Hello World
      </h1>
      <motion.div
        className=" cursor bg-gray-900 rounded-full fixed top-0 left-0 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
        style={{ width: '32px', height: '32px' }}
      />
    </div>
  );
}

export default Cursor;
