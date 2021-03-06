import React from "react";
import styles from "../styles/ProductList.module.css";
import PizzaCard from "./PizzaCard";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN!</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quas amet
        illum sit impedit officiis qui fugiat incidunt aspernatur, quod
        perferendis. Aliquam dolore doloremque, alias maxime sint fugiat harum
        quis quas esse quo est itaque doloribus?
      </p>
      <div className={styles.wrapper}>
        {productList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
