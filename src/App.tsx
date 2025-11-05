import React from "react";

function App() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Pedro HIB 👨‍💻</h1>
      <h2 style={styles.subtitle}>Front-End Developer | React + TypeScript</h2>
      <p style={styles.text}>
        Bem-vindo ao meu novo portfólio. Projeto criado com{" "}
        <strong>React + Vite + TypeScript</strong>.
      </p>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#38bdf8",
    marginBottom: "1rem",
  },
  text: {
    maxWidth: "500px",
    lineHeight: 1.5,
    fontSize: "1rem",
  },
};

export default App;
