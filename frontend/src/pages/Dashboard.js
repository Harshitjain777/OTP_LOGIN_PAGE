import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate=useNavigate();
  const userValid=()=>{
    const token=localStorage.getItem("userdbtoken");
    if(token){
      console.log("user Valid");
    }
    else{
      navigate("*");
    }
  }

  useEffect(()=>{
     userValid();
  },[])
  return (
    <div>

<h1>Dash Board</h1>

    </div>
  )
}

export default Dashboard