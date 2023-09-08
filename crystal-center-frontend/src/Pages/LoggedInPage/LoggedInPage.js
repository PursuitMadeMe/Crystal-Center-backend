import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Provides/UserPrivuder";
import { useNavigate} from "react-router-dom";
import { logOut } from "../../Services/Firebase";
import Home from "../Home/Home"


export const LoggedInPage = () => {
  const imgStyle = {
      width:'30vh',
      height:'30vh'
  }
  const user = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => { 
    if(!user) {
        alert("Come Back Soon - Ase")
        navigate("/");
      }
    }, [user, navigate]);

  
  const handleLogout = async () => {
    logOut()
    alert("You've Logged Out")
  };


  if ( user ){
    return (
      <div className="LoggedInPage">
        <div className="LoggedInPage--user">
        <h1> YOU ARE LOGGED IN </h1>
        <h2> {user.displayName}</h2>
        </div>
        <div className="LoggedInPage--controls"> 
        <br/>
        Email: {user.email}
        <br/>
        <Home/>
        <br/>
        <button onClick={handleLogout}> LOG OUT</button>
        </div>
      </div>
    );
  } else 
  return (
    <div> NOT LOGGED IN </div>
  )
}