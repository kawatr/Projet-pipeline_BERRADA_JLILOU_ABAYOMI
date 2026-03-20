'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(saved);
  }, []);

  const addTask = () => {
    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setNewTask("");
  };

  const deleteTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🎉 Dashboard</h1>

        <button onClick={() => {
          localStorage.removeItem("currentUser");
          router.push("/login");
        }}>
          Déconnexion
        </button>

        <h2>📝 ToDo List</h2>

        <input
          placeholder="Nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>Ajouter</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}