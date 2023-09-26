// FoodItems.js
'use client'
import React, { useRef, useEffect } from 'react';
import Styles from './FoodItem.module.css';
import Button from '@/app/components/Button';
import { useCart } from '@/app/store/CartContext';

const FoodItems = ({ selectedCategory, data }) => {
  const { addToCart } = useCart();
  const categoryRefs = {};

  // Create refs for each category
  data.forEach((category, index) => {
    categoryRefs[category.category] = useRef(null);
  });

  // Scroll to the selected category when it changes
  useEffect(() => {
    if (categoryRefs[selectedCategory] && categoryRefs[selectedCategory].current) {
      categoryRefs[selectedCategory].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [selectedCategory]);

  return (
    <div className={Styles.category}>
      {data.map((category, index) => (
        <div key={index} ref={categoryRefs[category.category]}>
          <div className={Styles.muiBox}></div>
          <h2>{category.category}</h2>
          <div className={Styles.categoryName}>
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className={Styles.foodName}>
                <img src={item.image} width={200} height={150} alt={item.name} />
                <div className={Styles.itemContent}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div
                    style={{
                      display: 'block',
                      width: '100%',
                      marginTop: -10,
                      height: 1,
                      backgroundColor: 'rgb(238, 240, 242)',
                    }}
                  />
                  <div
                    className={Styles.price}
                    style={{ color: 'rgb(228, 32, 38)', fontSize: 14 }}
                  >
                    <span>Rs. {item.price}</span>
                  </div>
                  <Button label="Add to cart" onClick={() => addToCart(item)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItems;
