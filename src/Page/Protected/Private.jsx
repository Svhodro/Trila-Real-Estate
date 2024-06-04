import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Signin from "../Login/Signin";

function Private() {
  const navigate = useNavigate();
  const { user, setuser } = useContext(UserContext);
  const data = localStorage.getItem("userData");
  useEffect(()=>{
    if (data) {
      setuser(true);
    } else {
      setuser(false);
    }
    
  }) 
  if (user === true) {
    return <Outlet />;
  } else {  
        navigate("/");
  }
  
}

export default Private;
