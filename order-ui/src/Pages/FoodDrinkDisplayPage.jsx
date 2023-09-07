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
  const foodPerPage = 3;

  const loadData = async () => {
    setTopList(Dataset.labels);
    setFoodList(Dataset.meals);
  };

  useEffect(() => {
    loadData();
  }, []);

  const startIndex = currentPage * foodPerPage;
  const endIndex = startIndex + foodPerPage;
  const foodSubset = foodList.slice(startIndex, endIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="main-page">
      <div className="left-section">
        <div className="items-list">
          {topList.map((item) => {
            return <TopList key={item.id} name={item.label} />;
          })}
        </div>
        <div className="combo-list">
          {foodSubset.map((item, index) => {
            return <Card key={index} item={item}></Card>;
          })}
        </div>

        <div className="pagination">
          <Pagination foodPerPage={foodPerPage} totalPages={foodList.length} paginate={paginate}/>
        </div>
      </div>
      <div className="right-section">
        <AddedMealSection></AddedMealSection>
      </div>
    </div>
  );
};

export default FoodDrinkDisplayPage;
