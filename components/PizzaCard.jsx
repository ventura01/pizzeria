import React from "react";
import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width={500} height={500} />
      <h1 className={styles.title}>FIORE DI ZUCCA</h1>
      <span className={styles.price}>U$19.99</span>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam in quod
        dignissimos dolores porro sint perferendis iste libero ad laudantium,
        reprehenderit.
      </p>
    </div>
  );
};

export default PizzaCard;
