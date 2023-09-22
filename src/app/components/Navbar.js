'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUser,
    faSearch,
    faShoppingCart,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';
import Image from 'next/image';
import logo from '../assets/images/images.png';
import {useCart} from "@/app/store/CartContext";
import CartModal from "@/app/components/cart/CartModal";

const Navbar = () => {
    const {cart} = useCart();
    const [isCartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

    return (
        <nav className={styles.navbar}>
            <div className="">
                <ul className={styles.leftnav}>
                    <li className={styles.location}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon"/>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                overflow: "hidden",
                                width: "100%",
                                cursor: "pointer",
                                maxWidth: 140
                            }}
                        >
  <span style={{color: "rgb(0, 0, 0)", fontSize: 14, fontWeight: "normal"}}>
    Deliver to
  </span>
                            <span
                                style={{
                                    color: "rgb(0, 0, 0)",
                                    fontSize: 12,
                                    fontWeight: "normal",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis"
                                }}
                            >
    Akhri Mint , Lahore
  </span>
                        </div>

                    </li>
                </ul>
            </div>
            <div className={styles.logo}>
                <ul className="">
                    <li className="nav-item">
                        <Link href="/">
                            <Image src={logo} alt="Logo" width={70} height={70}/>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="">
                <ul className={styles.navright}>
                    <li className="nav-item">
                        <Link className="nav-link" href="">
                            <FontAwesomeIcon icon={faSearch} className={styles.icon}/>

                        </Link>
                    </li>
                    <hr
                        className="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical blink-style-w6wt69"
                        color="#d40000"
                        style={{margin: "0px 4px", opacity: "0.4", height: 40}}
                    />

                    <li className="nav-item">
                        <Link className="nav-link" href="#">
                            <FontAwesomeIcon icon={faUser} className={styles.icon}/>

                        </Link>
                    </li>
                    <hr
                        className="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical blink-style-w6wt69"
                        color="#d40000"
                        style={{margin: "0px 4px", opacity: "0.4", height: 40}}
                    />
                    <li className="nav-item">
                        <button onClick={openCart} className={styles.cartButton}>
                            <div
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "108px",
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    backgroundColor: "rgb(252, 252, 252)",
                                    color: "rgb(0, 0, 0)",
                                    border: "1px solid",
                                    borderRadius: 25,
                                    height: 20,
                                    width: 20,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                }}
                            >
                                {cart.length}
                            </div>

                            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon}/>

                        </button>
                    </li>

                </ul>
            </div>
            <CartModal isOpen={isCartOpen} onClose={closeCart} />
        </nav>
    );
};

export default Navbar;
