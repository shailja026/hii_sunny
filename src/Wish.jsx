import React from 'react'
import music from "../src/music2.mp3"
import { useNavigate } from 'react-router-dom'

import "./wish.css"
function Wish() {
    const navigate = useNavigate()
    const hii = () => {
        navigate("/main")
    }
  return (
    <div className='wishes'>
      {/* controls */}
        <audio src={music} autoPlay > </audio>
        <h2> happy birthday Harshit</h2>
        <button onClick={hii}>click</button>
    </div>
  )
}

export default Wish