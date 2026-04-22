import styles from "./poster.module.css";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div className={styles.poster}>

        {/* HEADER VERDE */}
        <div className={styles.hero}>

          <div className={styles.topLine}>
            <span className={styles.line}></span>
            <span className={styles.star}>★</span>
            <span>EUROPEAN CUP FINAL 1966-67</span>
            <span className={styles.star}>★</span>
            <span className={styles.line}></span>
          </div>

          <div className={styles.scoreLine}>
            <span className={styles.team}>CELTIC</span>
            <span className={styles.score}>2-1</span>
            <span className={styles.team}>INTERNAZIONALE FC</span>
          </div>

        </div>

        {/* resto poster (placeholder) */}
        <div className={styles.body}></div>

      </div>
    </main>
  );
}
