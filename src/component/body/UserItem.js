import React from "react";

// const names = ["LeLah Nichols", "Jesus Weiss", "Annie Rice", "Robert Brower", "Amy Campbell","Anthony S.Morin"];


const UserItem = ({profile}) => {
 return(
  <div className="user">
   <div className="user-avt">
   <img src={profile.avatar} alt={profile.name}></img>
   </div>
   <div className="content">
    <h2>{profile.name}</h2>
    <h4>{profile.location}</h4>
    <div className="tags">
    { profile.tags.map(tag => (<span>{tag}</span> ))}
    </div>
  
   </div>
  </div>
 )
}

export default UserItem;