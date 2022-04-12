import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza shop in New York" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProductList />
    </div>
  );
}
