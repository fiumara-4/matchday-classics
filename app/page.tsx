export default function Home() {
  return (
    <main style={{
      background: "#e9e2d0",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Georgia, serif"
    }}>
      <div style={{
        width: "600px",
        background: "#fdfaf3",
        padding: "40px",
        border: "2px solid #111",
        boxShadow: "0 0 0 6px #fdfaf3, 0 0 0 8px #111"
      }}>

        <p style={{ textAlign: "center", letterSpacing: "2px" }}>
          European Cup Final 1966–67
        </p>

        <h1 style={{
          textAlign: "center",
          fontSize: "42px",
          margin: "10px 0"
        }}>
          Celtic 2 — 1 Inter
        </h1>

        <p style={{ textAlign: "center", marginBottom: "30px" }}>
          Lisbon — 25 May 1967
        </p>

        <div style={{ display: "flex", gap: "20px" }}>

          <div style={{ flex: 1 }}>
            <h3>Celtic</h3>
            <p style={{ fontSize: "14px" }}>
              Simpson, Craig, Gemmell, Murdoch, McNeill, Clark,
              Johnstone, Wallace, Chalmers, Auld, Lennox
            </p>

            <p><strong>Coach:</strong> Jock Stein</p>
          </div>

          <div style={{ flex: 1 }}>
            <h3>Inter</h3>
            <p style={{ fontSize: "14px" }}>
              Sarti, Burgnich, Facchetti, Bedin, Guarneri,
              Picchi, Jair, Mazzola, Cappellini, Suarez, Corso
            </p>

            <p><strong>Coach:</strong> Helenio Herrera</p>
          </div>

        </div>

      </div>
    </main>
  );
}
