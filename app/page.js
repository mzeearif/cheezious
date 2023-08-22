import Image from 'next/image'
import styles from './page.module.css'
import Slider from "@/app/pages/Slider";
import FoodItems from "@/app/pages/FoodItems";

export default function Home() {
  return (
    <main className={styles.main}>
  <Slider/>
      <FoodItems />
    </main>
  )
}
