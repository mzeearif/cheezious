'use client'
import React, {useEffect, useState} from 'react';
import Styles from './CartModal.module.css'; // Add your modal styles here
import {useCart} from '@/app/store/CartContext';
import Button from "@/app/components/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import Auth from "@/app/components/auth/auth";



const CartModal = ({isOpen, onClose}) => {
    const {cart, removeFromCart, increaseQuantity, decreaseQuantity} = useCart();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [hideCart, setHideCart] = useState(false)
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
    // useEffect(() => {
    //     const handleDocumentClick = (e) => {
    //         if (isOpen && !e.target.closest(`.${Styles.modalContent}`)) {
    //             onClose();
    //         }
    //     };
    //
    //     if (isOpen) {
    //         document.addEventListener('click', handleDocumentClick);
    //     }
    //
    //     return () => {
    //         document.removeEventListener('click', handleDocumentClick);
    //     };
    // }, [isOpen, onClose]);
    if (!isOpen) return null;
    const handleCheckout = () => {
        console.log("abc")
        setIsAuthModalOpen(true);
        setHideCart(true)

    };
    return (
        <div>
        {!hideCart && (<div className={Styles.modalbg}>
            <div className={Styles.modal}>
                <div className={Styles.modalContent}>
                    <div className={Styles.cartbutton}>
                        <h2>Your Cart</h2>
                        {/*{cart.length > 0 && (<button onClick={onClose} className={Styles.closeButton}>*/}
                        {/*    Close Cart*/}
                        {/*</button>)}*/}
                         <button onClick={onClose} className={Styles.closeButton}>
                            Close Cart
                        </button>
                    </div>
                    {cart.length === 0 ? (
                        <p style={{display: "flex", lineHeight: "50", justifyContent: "center"}}>Your cart is empty.</p>
                    ) : (
                        <div>
                            <div className={Styles.cartitems}>
                                {cart.map((item, index) => (
                                    <div key={index}>
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
                        <Button label="Checkout" onClick={handleCheckout}/>
                    </div>)}
                </div>
            </div>

        </div>)}
            {isAuthModalOpen && (
                <div className={Styles.overlay}>
                   <Auth onClose={() => { setIsAuthModalOpen(false); setHideCart(false); }} />
                </div>
            )}
            </div>
    );
};

export default CartModal;
