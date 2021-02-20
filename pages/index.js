import Head from "next/head";
import styles from "../styles/Home.module.css";

import products from "../products.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stylish store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Stylish Store</h1>

        <ul className={styles.grid}>
          {products.map((product) => (
            <li className={styles.card} key={product.id}>
              <a href="">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>AcarMeel 2021</footer>
    </div>
  );
}
