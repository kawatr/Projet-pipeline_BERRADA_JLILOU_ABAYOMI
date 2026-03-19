'use client'
import { CSSProperties } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1>🎉 Bienvenue !</h1>
      <p>Vous êtes connecté.</p>

      <button
        onClick={() => {
          localStorage.removeItem("user");
          router.push("/login");
        }}
      >
        Déconnexion
      </button>
    </div>
  );
}

const styles: { container: CSSProperties } = {
  container: {
    textAlign: "center",
    marginTop: 100
  }
};