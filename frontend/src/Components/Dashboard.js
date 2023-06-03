import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../Components/css/dashboard.css"

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn"));
  }, [isLoggedIn]);
  return (
    
    <div className='dashboard-heading'>Dashboard  {isLoggedIn}</div>
  )
}
