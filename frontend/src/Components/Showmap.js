import React from 'react'
import { useState,useEffect } from 'react';
import "../Components/css/showmap.css"
import ErgonProjectsMap from "../Components/css/image/ErgonProjectsMap.jpg"
import {Link} from 'react-router-dom';
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
    <div className='listmaphandbook_btn'  style={{marginTop:'120px'}}>
 <Link to="/rigdetails">  <button className="listbutton active" onClick={handleListClick} style={{marginLeft:'5px'}}>List</button></Link> 
< button className="mapbutton" onClick={handleClick}> Map</button>
   <button className="handbookbutton"  onClick={handleHandbookClick}>Handbook</button>
  </div>
    
    <div style={{ display: 'flex', justifyContent: 'center' ,marginTop:'10px'}}>
      <img src={ErgonProjectsMap} height="100%" width="100%"></img>
      </div>
      </>
  )
}

export default Showmap;