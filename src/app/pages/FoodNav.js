'use client'
// FoodNav.js
// FoodNav.js
import React, { useState } from 'react';
import styles from './FoodItems.module.css';
import FoodItems from "@/app/pages/FoodItems";
import data from "@/app/assets/data/data";

const FoodNav = () => {
  const [selectedCategory, setSelectedCategory] = useState('Burger');
  const allItems = [...new Set(data.map((item) => item.category))];
  const initialItemsToShow = 10;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleNextClick = () => {
    if (currentItemIndex + 1 < allItems.length) {
      setItemsToShow((prevItemsToShow) => prevItemsToShow + 0);
      setCurrentItemIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePreviousClick = () => {
    if (currentItemIndex > 0) {
      setItemsToShow((prevItemsToShow) => prevItemsToShow - 0);
      setCurrentItemIndex((prevIndex) => prevIndex - 1);
    }
  };

  const isNextButtonDisabled = currentItemIndex + initialItemsToShow >= allItems.length;

  return (
    <>
      <div className={styles.fooditem}>
        {/* Pagination */}
        <nav aria-label="Page navigation" className={styles.foodnav}>
          <ul className="pagination">
            <span className={`page-item ${currentItemIndex === 0 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={handlePreviousClick}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </span>
            {allItems
              .slice(currentItemIndex, currentItemIndex + itemsToShow)
              .map((item, index) => (
                <li
                  key={index}
                  className={`list-group-item ${selectedCategory === item ? styles.activeCategory : ''}`}
                  onClick={() => handleCategoryChange(item)}
                >
                  {item}
                </li>
              ))}
            <span
              className={`page-item ${isNextButtonDisabled ? 'disabled' : ''}`}
            >
              <button
                className="page-link"
                onClick={handleNextClick}
                aria-label="Next"
                disabled={isNextButtonDisabled}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </span>
          </ul>
        </nav>
      </div>
      <FoodItems selectedCategory={selectedCategory} data={data} />
    </>
  );
};

export default FoodNav;

