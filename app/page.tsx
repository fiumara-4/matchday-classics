import styles from './poster.module.css';

export default function Home() {

  const match = {
    home: "Celtic",
    away: "Inter",
    score: "2 — 1",
    competition: "European Cup Final 1966–67",
    stadium: "Lisbon",
    date: "25 May 1967",
    color: "#1f7a3b"
  };

  return (
    <main style={{
      background: "#d6d1c4",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px"
    }}>

      <div className={styles.poster}>

        {/* HEADER */}
        <div
          className={styles.header}
          style={{ background: match.color }}
        >
          <h1 className={styles.score}>
            {match.home} {match.score} {match.away}
          </h1>
        </div>

        {/* META */}
        <div className={styles.meta}>
          {match.competition} · {match.stadium} · {match.date}
        </div>

        {/* CONTENT */}
        <div className={styles.content}>

          <div className={styles.team}>
            <div className={styles.teamName}>{match.home}</div>
            <div className={styles.players}>
              Simpson<br/>
              Craig<br/>
              Gemmell<br/>
              Murdoch<br/>
              McNeill<br/>
              Clark<br/>
              Johnstone<br/>
              Wallace<br/>
              Chalmers<br/>
              Auld<br/>
              Lennox
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.team}>
            <div className={styles.teamName}>{match.away}</div>
            <div className={styles.players}>
              Sarti<br/>
              Burgnich<br/>
              Facchetti<br/>
              Bedin<br/>
              Guarneri<br/>
              Picchi<br/>
              Jair<br/>
              Mazzola<br/>
              Cappellini<br/>
              Suarez<br/>
              Corso
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className={styles.footer}>
          MATCHDAY CLASSICS
        </div>

      </div>

    </main>
  );
}
