import './App.css';
import { useEffect, useState } from 'react';
import Body from './components/Body';
import ChallangeEditor from './components/ChallangeEditor';
import Explore from './components/Explore';
import IDE from './components/IDE';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from "framer-motion"

function App() {
  const [mousePoistion, setMousePoistion] = useState({
    x: 0,
    y: 0
  })

  console.log(mousePoistion.x, mousePoistion.y)

  useEffect(() => {
    /* eslint-disable */
    const scroll = new LocomotiveScroll({
      smooth: true
    })
    const mouseMove = e => {
      setMousePoistion({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePoistion.x - 5,
      y: mousePoistion.y - 5
    }
  }

  return (
    <>
      <motion.div
        className="mouse"
        variants={variants}
        animate="default"
      />
      <Navbar />
      <div className="main">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/IDE' element={<IDE />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='//explore/editor' element={<ChallangeEditor />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
