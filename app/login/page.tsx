'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      router.push("/dashboard");
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🔐 Connexion</h1>

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleLogin}>Se connecter kawtar</button>

        <p onClick={() => router.push("/register")} className="link">
          S'inscrire
        </p>
      </div>
    </div>
  );
}