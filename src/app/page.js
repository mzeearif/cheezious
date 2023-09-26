'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Slider from "@/app/pages/Slider";
import FoodNav from "@/app/pages/FoodNav";
import FinestTaste from "@/app/pages/FinestTaste";
// import {CartProvider} from "@/app/store/CartContext";
import { useEffect } from 'react';
import initBootstrap from './components/bootstrap';
import Footer from "@/app/pages/Footer";
export default function Home( ) {
   useEffect(() => {
    // Call the Bootstrap initialization function on the client side
    initBootstrap();
  }, []);
  return (

    <main className={styles.main}>

  <Slider/>
      <FoodNav />
        <FinestTaste/>
        <Footer />
    </main>

  )
}
