// FoodItems.js
import React from 'react';
import data from '@/app/assets/data/data';
import Styles from './FoodItem.module.css';
import Button from '@/app/components/Button';
import { useCart } from '@/app/store/CartContext';

const FoodItems = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log(item)
  };

  return (
    <div className={Styles.category}>

      {data.map((category, index) => (
        <div key={index}>
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
                  <Button label="Add to cart" onClick={() => handleAddToCart(item)} />
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
