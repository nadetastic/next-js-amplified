"use client";

import styles from "../page.module.css";

import { getCurrentUser, signInWithRedirect, signOut } from "aws-amplify/auth";

export default function Home() {
  const handleGetUser = async () => {
    try {
      const res = await getCurrentUser();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const test = async () => {
    try {
      await signInWithRedirect();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <button onClick={handleGetUser}>GetUser</button>
          <br />
          <button onClick={async () => await signOut()}>Sign Out</button>
        </div>
      </div>

      <div className={styles.center}></div>

      <div className={styles.grid}>Dashboard</div>
    </main>
  );
}
