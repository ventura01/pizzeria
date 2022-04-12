import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, I DID IT. RAFAEL THE BEST WEB DEVELOPER!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURATS</h1>
          <p className={styles.text}>
            Medhurst, Dickens and Fisher <br />
            568-895-8495 <br />
            Morris.Kemmer@gmail.com
          </p>
          <p className={styles.text}>
            Medhurst, Dickens and Fisher <br />
            568-895-8495 <br />
            Morris.Kemmer@gmail.com
          </p>
          <p className={styles.text}>
            Medhurst, Dickens and Fisher <br />
            568-895-8495 <br />
            Morris.Kemmer@gmail.com
          </p>
          <p className={styles.text}>
            Medhurst, Dickens and Fisher <br />
            568-895-8495 <br />
            Morris.Kemmer@gmail.com
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY <br />
            9:00 -22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY <br />
            11:00 -21:00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
