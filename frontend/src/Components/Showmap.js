import React from 'react'
import { useState, useEffect } from 'react';
import "../Components/css/showmap.css"
import ErgonProjectsMap from "../Components/css/image/ErgonProjectsMap.jpg"
import { Link } from 'react-router-dom';
function Showmap() {

  const [showHandBook, setShowHandBook] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleListClick = () => {
    // Render a list view of the rigs
  };

  const handleHandbookClick = () => {
    // Render a handbook of the 
    setShowHandBook(true);
  };

  const handleClick = () => {
    setShowImage(true);
  };



  return (
    <>
      <div className=' mx-auto mb-2' style={{ maxWidth: "900px" }}>
        <img src={ErgonProjectsMap} height="100%" width="100%"></img>
      </div>

    </>
  )
}

export default Showmap;