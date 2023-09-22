import Image from 'next/image'
import styles from './page.module.css'
import Slider from "@/app/pages/Slider";
import FoodNav from "@/app/pages/FoodNav";
// import {CartProvider} from "@/app/store/CartContext";

export default function Home( ) {
  return (

    <main className={styles.main}>

  <Slider/>
      <FoodNav />
    </main>

  )
}
