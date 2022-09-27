import React from "react";
import { useContext } from "react";
import { selectContext } from "../../App";


const Seach = () => {
  const { search, setSearch } = useContext(selectContext);
  return (
    <div className="search">
      <div className="search-icon">
        <img src={process.env.PUBLIC_URL + "/search-icon.svg"} alt="search"></img>
      </div>
      <div className="search-input">
        <input onChange={(e) => setSearch(e.target.value)} placeholder="Search users" value={search} />
      </div>
    </div>
  );
};
export default Seach;
