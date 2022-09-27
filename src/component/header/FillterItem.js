import React from "react";
import { useContext } from "react";
import { selectContext } from "../../App";

const FillterItem = ({ name }) => {
  const { selected, setSelected } = useContext(selectContext);
  return (
    <li
      onClick={() => setSelected(name)}
      className={name === selected ? "selected" : ""}
    >
      <span>{name}</span>
    </li>
  );
};
export default FillterItem;
