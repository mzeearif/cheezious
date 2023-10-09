import React, {useState} from "react";
import '../../globals.css';
import Styles from './ModalCart.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useCart} from "@/app/store/CartContext";
import Button from "@/app/components/Button";
import AuthModal from "@/app/components/modal/AuthModal";

const ModalCart = () => {
     const {cart,removeFromCart, increaseQuantity, decreaseQuantity} = useCart();
     const [modalVisible, setModalVisible] = useState(false);
     const [authmodal , setAuthmodal] = useState(false)

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

     const calculateItemSubtotal = (item) => {
        return (parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    };

    const totalPrice = calculateTotalPrice().toFixed(2);
     const handleRemoveFromCart = (item) => {
        removeFromCart(item);
    };
     const handleAuthModal = () =>{
setModalVisible(false);
setAuthmodal(true)
     }
  return(
      <div>
      <span onClick={openModal}>{cart.length}</span>

      {modalVisible && (
        <div className={Styles.modal} onClick={handleOutsideClick}>
          <div className={Styles.modalcontent}>
              <div className={Styles.cartbutton}>
                        <h2>Your Cart</h2>
                   <span className={Styles.close} onClick={closeModal}>&times;</span>
                    </div>
            <div className={Styles.cartitems1}>
                             {cart.length === 0 ? (
                        <p style={{display: "flex", lineHeight: "50", justifyContent: "center"}}>Your cart is empty.</p>
                    ) : (
                        <div>
                            <div className={Styles.cartitems}>
                                {cart.map((item, index) => (
                                    <div key={index} className={Styles.itemsarea}>
                                        <div>
                                            <div className={Styles.nameimage}>
                                                <span><span>{item.quantity}</span><img src={item.image} alt={item.name}
                                                                                       width={100} height={100}/></span>
                                                <div className={Styles.namediscription}>
                                                    <h3>{item.name}</h3>
                                                    <p style={{
                                                        fontsize: "14px",
                                                        color: "#838f9b",
                                                    }}>ghgfhdfghdgfhdgfh{item.description}</p>
                                                    <p className={Styles.price}>Rs. {calculateItemSubtotal(item)}</p>
                                                    <div className={Styles.add_remove}>
                                                        <div className={Styles.increase_decrease}>
                                                            <button onClick={() => increaseQuantity(item)}>+</button>
                                                            <button onClick={() => decreaseQuantity(item)}>-</button>
                                                        </div>
                                                        <span onClick={() => removeFromCart(item)}><FontAwesomeIcon
                                                            icon={faTrashAlt}/></span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}
                 {cart.length > 0 && (<div className={Styles.totalprice}>
                        <div className={Styles.subtotal}>
                            <span>Subtotal</span>
                            <span>RS: {totalPrice}</span>
                        </div>
                        <div className={Styles.subtotal}>
                            <span>Discount</span>
                            <span>Rs. {"00"}</span>
                        </div>
                        <div className={Styles.subtotal}>
                            <span style={{fontWeight: "bold"}}>Grand total</span>
                            <span>Rs. {totalPrice}</span>
                        </div>
                        <Button label="Checkout" onClick={handleAuthModal}/>
                    </div>)}
                            </div>
          </div>
        </div>
      )}
          {authmodal && (<AuthModal/>)}
    </div>
  )
}
export default ModalCart;