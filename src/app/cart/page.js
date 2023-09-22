'use client'
import Styles from './Cart.module.css'
import {useCart} from "@/app/store/CartContext";
const Page = () => {
const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
const calculateItemSubtotal = (item) => {
    return (parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2);
  };

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
  };

  const totalPrice = calculateTotalPrice().toFixed(2);
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };
  return (
   <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <div>
                  <h3>{item.name}</h3>
                 {/*<p>Price: Rs. {item.price}</p>*/}
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                    <p>Subtotal: Rs. {calculateItemSubtotal(item)}</p>
                </div>
              </li>
            ))}
          </ul>
          <p>Total Price: Rs. {totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Page;
