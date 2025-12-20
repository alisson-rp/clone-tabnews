function Home() {
    const img = require('../image/logo-teens.png')
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={img}
          alt="Atitude Teens"
          style={styles.logo}
        />

        <h1 style={styles.title}>Atitude Teens</h1>

        <p style={styles.subtitle}>
          Adolescentes cristãos vivendo a fé com atitude
        </p>

        <div style={styles.divider}></div>

        <h2 style={styles.construction}>🚧 Site em Construção 🚧</h2>

        <p style={styles.text}>
          Estamos preparando algo especial para você.  
          Em breve, nosso site estará no ar com conteúdos, eventos e muita atitude!
        </p>

        <p style={styles.verse}>
          “Tudo posso naquele que me fortalece.”  
          <br /> Filipenses 4:13
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0b0b0b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  card: {
    backgroundColor: "#111",
    borderRadius: "16px",
    padding: "40px 30px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 0 30px rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  logo: {
    width: "120px",
    marginBottom: "20px",
    filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))",
  },
  title: {
    fontSize: "2.3rem",
    color: "#ffffff",
    marginBottom: "8px",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#bbbbbb",
  },
  divider: {
    width: "60px",
    height: "3px",
    backgroundColor: "#ffffff",
    margin: "22px auto",
    opacity: 0.6,
  },
  construction: {
    fontSize: "1.6rem",
    color: "#ffffff",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1rem",
    color: "#cccccc",
    lineHeight: "1.6",
  },
  verse: {
    marginTop: "25px",
    fontSize: "0.9rem",
    color: "#888",
    fontStyle: "italic",
  },
};

export default Home;
