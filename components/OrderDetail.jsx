import React, { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  console.log(createOrder);
  const hanldleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay U$12 after delivery</h1>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Name surname
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="Rafael Ventura"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Address
          </label>
          <textarea
            name="address"
            id="address"
            placeholder="Main street  101"
            onChange={(e) => setAddress(e.target.value)}
            rows="5"
            className={styles.textarea}
          ></textarea>
        </div>
        <div className={styles.item}>
          <label htmlFor="" className={styles.label}>
            Phone number
          </label>
          <input
            type="text"
            className={styles.input}
            placeholder="505 2626 2626"
          />
        </div>
        <button className={styles.button} onClick={hanldleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
