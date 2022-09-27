import React from "react";
import FillterItem from "./FillterItem";

const names = ["ReactJs","NodeJs", "Css", "Js", "Python"];
// const selectedName = "NodeJs";

const Fillter = () =>{
 return(
  <ul className="fillter-list">
   {names.map( name => (
    <FillterItem name = {name}/>
   ))}

  </ul>

 )
}

export default Fillter;