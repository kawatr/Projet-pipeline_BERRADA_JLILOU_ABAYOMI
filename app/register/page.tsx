'use client'
import { useState, CSSProperties } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Compte créé !");
    router.push("/login");
  };

  return (
    <div style={styles.container}>
      <h1>📝 Inscription</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Créer compte</button>
    </div>
  );
}

const styles: { container: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: 300,
    margin: "100px auto",
    textAlign: "center"
  }
};