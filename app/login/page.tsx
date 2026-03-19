'use client'
import { useState, CSSProperties } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (email === user.email && password === user.password) {
      router.push("/dashboard");
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div style={styles.container}>
      <h1>🔐 Connexion</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Se connecter</button>

      <p onClick={() => router.push("/register")} style={styles.link}>
        Pas de compte ? S'inscrire
      </p>
    </div>
  );
}

const styles: { container: CSSProperties; link: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: 300,
    margin: "100px auto",
    textAlign: "center"
  },
  link: {
    color: "blue",
    cursor: "pointer"
  }
};