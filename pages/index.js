import Head from "next/head";
import styles from "../styles/Home.module.css";

import products from "../products.json";
import { initiateCheckouts } from "../lib/payments";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_STRIPE_API_KEY);
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
              <p>
                <button
                  className={styles.button}
                  onClick={() => {
                    initiateCheckouts({
                        lineItems: [
                            {
                                price: product.id,
                                quantity: 1
                            }
                        ]
                    });
                  }}
                >
                  Buy Now
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
