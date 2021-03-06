import Head from "next/head";
import styles from "../styles/Home.module.css";

import products from "../products.json";

import useCart from "../hooks/use-cart";

export default function Home() {
  const { subtotal, totalItems, addToCart, checkout } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Stylish store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Stylish Store</h1>
        <p className={styles.description}>
          <strong>Items</strong> {totalItems}
          <br />
          <strong>Total Cost</strong> ${subtotal}
          <br />
          <button className={styles.button} onClick={checkout}>
            Checkout
          </button>
        </p>
        <ul className={styles.grid}>
          {products.map((product) => (
            <li className={styles.card} key={product.id}>
              <a href="">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </a>
              <p>
                <button
                  className={styles.button}
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </p>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>AcarMeel 2021</footer>
    </div>
  );
}
