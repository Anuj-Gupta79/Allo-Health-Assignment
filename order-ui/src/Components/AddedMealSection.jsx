import React, { useState } from "react";
import { Plane, ChevronUp, ChevronDown } from "lucide-react";
import "../Style.css";

const AddedMealSection = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const arr = [
    { name: "Adult Passenger 1", selection: "Select Meal" },
    { name: "Adult Passenger 2", selection: "Not Select" },
  ];

  return (
    <div className="add-meal">
      <div className="heading">
        <Plane color="grey" strokeWidth="2" size="25" />
        <h1>Select meal</h1>
      </div>
      <div className="block">
        <div className="text">
          <p className="flight-name">AirAsia India</p>
          <p className="flight-duration">Flight duration, 24 hours</p>
        </div>

        <div className="icon" onClick={handleClick}>
          {toggle ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
      {toggle ? (
        <>
          {arr.map((item, index) => {
            return (
              <option value="index" key={index} className="options">
                <div className="item-name">{item.name}</div>
        
                <div className="item-selection">{item.selection}</div>
              </option>
            );
          })}
        </>
      ) : (
        ""
      )}
      <div className="total-price">
        <p>Total for all passengers</p>
        <h3>39"&#x20AC;</h3>
      </div>
    </div>
  );
};

export default AddedMealSection;
