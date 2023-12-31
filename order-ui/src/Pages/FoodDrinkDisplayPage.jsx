/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import TopList from "../Components/TopList";
import Card from "../Components/Card";
import AddedMealSection from "../Components/AddedMealSection";
import "../Style.css";
import Dataset from "../Utils/dataset.utils.json";
import Pagination from "../Components/Pagination";

const FoodDrinkDisplayPage = () => {
  const [topList, setTopList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterTopList, setFilterTopList] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [selectedCard, setSelectedCard] = useState([]);
  const foodPerPage = 3;

  
  const loadData = async () => {
    setTopList(Dataset.labels);
    setFoodList(Dataset.meals);
  };
  
  useEffect(() => {
    loadData();
  }, []);
  
  useEffect(() => {
    const filteredFoodList = selectedLabel
    ? foodList.filter((food) => food.labels.includes(selectedLabel))
    : foodList;
    setFilterTopList(filteredFoodList);
  }, [selectedLabel, foodList]);
  
  const startIndex = currentPage * foodPerPage;
  const endIndex = startIndex + foodPerPage;
  const foodSubset = filterTopList.slice(startIndex, endIndex);
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const selectedLabelClick = (label) => {
    setSelectedLabel((prevLabel) => (prevLabel === label ? null : label));
  };
  
  const cardSelectedHandler = (item) => {
    const isSelected = selectedCard.some((card) => card.id === item.id);

    const newSelectedCards = isSelected
      ? selectedCard.filter((card) => card.id !== item.id)
      : [...selectedCard, item];

    setSelectedCard(newSelectedCards);
  }

  const totalPrice = selectedCard.reduce((total, card) => {
    return total + card.price;
  }, 39)
  
  return (
    <div className="main-page">
      <div className="left-section">
        <div className="items-list">
          {topList.map((item) => {
            return (
              <TopList
                key={item.id}
                name={item.label}
                selectedLabelClick={selectedLabelClick}
                selected={item.id === selectedLabel}
                label={item.id}
              />
            );
          })}
        </div>
        <div className="combo-list">
          {foodSubset.map((item, index) => {
            return (
              <Card key={index} item={item} cardSelectedHandler={cardSelectedHandler} />
            );
          })}
        </div>

        <div className="pagination">
          <Pagination
            foodPerPage={foodPerPage}
            totalPages={filterTopList.length}
            paginate={paginate}
          />
        </div>
      </div>
      <div className="right-section">
        <AddedMealSection totalPrice={totalPrice} selectedCard={selectedCard}></AddedMealSection>
      </div>
    </div>
  );
};

export default FoodDrinkDisplayPage;
