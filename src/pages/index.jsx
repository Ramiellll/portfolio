import Head from "next/head";
import Content from "../components/content";
import Name from "../components/name";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{width: '100%'}}>
        <div className={styles.leftContainer}>
          <Content/>
        </div>
        <div className={styles.rightContainer}>
          <Name />
        </div>
      </div>
    </div>
  );
}
