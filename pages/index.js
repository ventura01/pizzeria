import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";

export default function Home({ productList }) {
  // console.log(productList);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best Pizza shop in New York" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProductList productList={productList} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
