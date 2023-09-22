'use client'
import React, { useState } from 'react';
import styles from './FoodItems.module.css';
import FoodItems from "@/app/pages/FoodItems";

const FoodNav = () => {
  const allItems = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
    'Category 7',
    'Category 8',
    'Category 9',
    'Category 10',
    'Category 11',
    'Category 12',
    'Category 13',
    'Category 14',
    'Category 15',
  ];

  const initialItemsToShow = 10;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const handleNextClick = () => {
    if (currentItemIndex + 1 < allItems.length) {
      setItemsToShow((prevItemsToShow) => prevItemsToShow + 0);
      setCurrentItemIndex((prevIndex) => prevIndex + 1);
    }
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
          <li className={`page-item ${currentItemIndex === 0 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={handlePreviousClick}
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
              {allItems.slice(currentItemIndex, currentItemIndex + itemsToShow).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
          <li
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
          </li>
        </ul>
      </nav>

    </div>
      <FoodItems/>
      </>
  );
};

export default FoodNav;
