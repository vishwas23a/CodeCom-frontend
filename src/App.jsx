import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Home from './components/Home'
import Cursor from './components/Cursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Home/>
{/* <Cursor/> */}
    </>
  )
}

export default App
