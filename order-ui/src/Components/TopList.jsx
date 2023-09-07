import React, { useState } from "react";
import "../Style.css";

const TopList = ({ name }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected)
  }

  const buttonStyle = {
    border: selected ? "1px solid blue" : "1px solid black",
    backgroundColor: selected ? "#e6faff" : "#fff",
    color: selected ? "blue" : "black",
  };
  return (
    <div
      className="selected-button"
      style={buttonStyle}
      onClick={() => handleClick(name)}
    >
      {name}
    </div>
  );
};

export default TopList;
