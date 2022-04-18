import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const changePrice = (number) => {
    setPrice(price + number);
  };
  const hedleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
    } else {
      changePrice(-option.price);
    }
  };
  console.log(price);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>U${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size:</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => hedleSize(0)}>
            <Image
              src="/img/size.png"
              alt=""
              layout="fill"
              objectfit="contain"
            />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => hedleSize(1)}>
            <Image
              src="/img/size.png"
              alt=""
              layout="fill"
              objectfit="contain"
            />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => hedleSize(2)}>
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
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                name={option.text}
                onChange={(e) => handleChange(e, option)}
                id={option.text}
                className={styles.checkbox}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
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
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};
