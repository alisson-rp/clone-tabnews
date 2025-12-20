function Home() {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Atitude Teens</h1>
                <p style={styles.subtitle}>
                    Um grupo de adolescentes cristãos vivendo a fé com atitude
                </p>

                <div style={styles.divider}></div>

                <h2 style={styles.construction}>🚧 Site em Construção 🚧</h2>

                <p style={styles.text}>
                    Estamos preparando algo especial para você!
                    Em breve, nosso site estará no ar com novidades, eventos e conteúdos
                    feitos especialmente para adolescentes.
                </p>

                <p style={styles.footer}>
                    “Tudo posso naquele que me fortalece.” – Filipenses 4:13
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "30px",
        maxWidth: "500px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    },
    title: {
        fontSize: "2.5rem",
        color: "#2575fc",
        marginBottom: "10px",
    },
    subtitle: {
        fontSize: "1.1rem",
        color: "#555",
    },
    divider: {
        width: "60px",
        height: "4px",
        backgroundColor: "#2575fc",
        margin: "20px auto",
        borderRadius: "2px",
    },
    construction: {
        fontSize: "1.8rem",
        color: "#333",
        marginBottom: "15px",
    },
    text: {
        fontSize: "1rem",
        color: "#666",
        lineHeight: "1.5",
    },
    footer: {
        marginTop: "20px",
        fontSize: "0.9rem",
        color: "#888",
        fontStyle: "italic",
    },
};

export default Home;
// function Home() {
//   return <h1>Site em Construção</h1>;
// }

// export default Home;
