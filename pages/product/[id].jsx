import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>U${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size:</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image
              src="/img/size.png"
              alt=""
              layout="fill"
              objectfit="contain"
            />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image
              src="/img/size.png"
              alt=""
              layout="fill"
              objectfit="contain"
            />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image
              src="/img/size.png"
              alt=""
              layout="fill"
              objectfit="contain"
            />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose your additional ingredient:</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="double"
              id="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="garlic"
              id="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="cheese"
              id="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="spicy"
              id="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input
            type="number"
            name="qty"
            id="qty"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
