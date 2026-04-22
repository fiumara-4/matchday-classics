import styles from './poster.module.css';

export default function Home() {

  const match = {
    home: "Celtic",
    away: "Inter",
    score: "2 — 1",
    competition: "European Cup Final 1966–67",
    stadium: "Lisbon · 25 May 1967",
    color: "#1f7a3b"
  };

  return (
    <main style={{
      background: "#d6d1c4",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div className={styles.poster}>

        <div
          className={styles.header}
          style={{ background: match.color }}
        >
          <h1 className={styles.score}>
            {match.home} {match.score} {match.away}
          </h1>
        </div>

        <div className={styles.subheader}>
          <div>{match.competition}</div>
          <div>{match.stadium}</div>
        </div>

        <div className={styles.content}>

          <div className={styles.team}>
            <h2>{match.home}</h2>
            <div className={styles.players}>
              Simpson<br/>Craig<br/>Gemmell<br/>Murdoch<br/>
              McNeill<br/>Clark<br/>Johnstone<br/>
              Wallace<br/>Chalmers<br/>Auld<br/>Lennox
            </div>
          </div>

          <div className={styles.team}>
            <h2>{match.away}</h2>
            <div className={styles.players}>
              Sarti<br/>Burgnich<br/>Facchetti<br/>Bedin<br/>
              Guarneri<br/>Picchi<br/>Jair<br/>
              Mazzola<br/>Cappellini<br/>Suarez<br/>Corso
            </div>
          </div>

        </div>

        <div className={styles.footer}>
          MATCHDAY CLASSICS
        </div>

      </div>

    </main>
  );
}
