export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0b1220", color: "white", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        borderBottom: "1px solid #1f2a44"
      }}>
        <h2>🌿 Gesundheit & Frohsinn</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/ernaehrung" style={{ color: "white" }}>Ernährung</a>
          <a href="/bewegung" style={{ color: "white" }}>Bewegung</a>
          <a href="/mental" style={{ color: "white" }}>Mental</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "120px 20px"
      }}>
        <h1 style={{ fontSize: "48px" }}>Gesund leben. Stark denken.</h1>
        <p style={{ color: "#b0b8c9", marginTop: "10px" }}>
          Deine Plattform für Ernährung, Bewegung und mentale Stärke
        </p>
      </section>

      {/* CARDS */}
      <section style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "40px"
      }}>

        <div style={card}>
          🥗 Ernährung
        </div>

        <div style={card}>
          🏃 Bewegung
        </div>

        <div style={card}>
          🧠 Mental
        </div>

      </section>

    </main>
  );
}

const card = {
  background: "#111a2e",
  padding: "30px",
  borderRadius: "12px",
  width: "200px",
  textAlign: "center",
  border: "1px solid #1f2a44"
};