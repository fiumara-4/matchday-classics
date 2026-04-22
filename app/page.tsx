export default function Home() {
  return (
    <main style={{
      background: "#d6d1c4",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
      fontFamily: "'Times New Roman', serif"
    }}>
      <div style={{
        width: "700px",
        background: "#f9f6ee",
        padding: "50px 40px",
        border: "3px solid #111",
        boxShadow: "0 0 0 8px #f9f6ee, 0 0 0 11px #111"
      }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <p style={{
            letterSpacing: "3px",
            fontSize: "12px",
            marginBottom: "10px"
          }}>
            EUROPEAN CUP FINAL 1966–67
          </p>

          <h1 style={{
            fontSize: "46px",
            margin: "10px 0",
            letterSpacing: "1px"
          }}>
            CELTIC 2 — 1 INTER
          </h1>

          <p style={{ fontSize: "14px" }}>
            Lisbon · 25 May 1967
          </p>
        </div>

        {/* LINE */}
        <div style={{
          borderTop: "1px solid #111",
          margin: "20px 0"
        }} />

        {/* CONTENT */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "40px"
        }}>

          {/* TEAM 1 */}
          <div style={{ width: "50%" }}>
            <h2 style={{
              fontSize: "20px",
              marginBottom: "10px"
            }}>
              Celtic
            </h2>

            <p style={{
              fontSize: "13px",
              lineHeight: "1.6"
            }}>
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
            </p>

            <p style={{ marginTop: "10px", fontSize: "13px" }}>
              <strong>Coach:</strong> Jock Stein
            </p>
          </div>

          {/* TEAM 2 */}
          <div style={{ width: "50%" }}>
            <h2 style={{
              fontSize: "20px",
              marginBottom: "10px"
            }}>
              Inter
            </h2>

            <p style={{
              fontSize: "13px",
              lineHeight: "1.6"
            }}>
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
            </p>

            <p style={{ marginTop: "10px", fontSize: "13px" }}>
              <strong>Coach:</strong> Helenio Herrera
            </p>
          </div>

        </div>

        {/* FOOTER */}
        <div style={{
          borderTop: "1px solid #111",
          marginTop: "30px",
          paddingTop: "10px",
          textAlign: "center",
          fontSize: "11px",
          letterSpacing: "2px"
        }}>
          MATCHDAY CLASSICS
        </div>

      </div>
    </main>
  );
}
