'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    users.push({ email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Compte créé !");
    router.push("/login");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>📝 Inscription</h1>

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleRegister}>Créer compte</button>
      </div>
    </div>
  );
}