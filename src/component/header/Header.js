import React from "react";
import Seach from "./Search";
import Fillter from "./Fillter";

const Header = () =>{
 return(
  <div className="header">
   <div className="user"><h1>Users</h1></div>
   <div className="mcxd">
   <Seach/>
  <Fillter/>
   </div>
  
  </div>
 )
}
export default Header;