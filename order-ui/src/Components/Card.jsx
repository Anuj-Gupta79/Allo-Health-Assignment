import React, { useState } from "react";
import "../Style.css";

const Card = ({ item }) => {
  const [selectedJuice, setSelectedJuice] = useState("");
  const [selected, setSelected] = useState(false);
  const [currJuice, setCurrJuice] = useState(0);

  const juiceClick = (title, index) => {
    setSelected(!selected);
    if (selected && index === currJuice) {
      setSelectedJuice("");
    } else setSelectedJuice(title);
    setCurrJuice(index);
  };

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={item.img} alt="error" />
        </div>
        <div className="card-content">
          <p>{item.title}</p>
          <h1>{item.description}</h1>
          <p>
            <b>Starter:</b> {item.starter}
          </p>
          <p>
            <b>Desert:</b> {item.desert}
          </p>
          <p>
            <b>Selected Drink:</b> {selectedJuice}
          </p>
          <div className="card-bottom">
            <div className="juices-img">
              {item.drinks.map((drink, index) => {
                return (
                  <img
                    src={drink.img}
                    alt="error"
                    key={index}
                    onClick={() => juiceClick(drink.title, index)}
                  />
                );
              })}
            </div>
            <div className="price-select">
              <h3>{item.price}"&#x20AC;</h3>
              <button>Select</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Card;
