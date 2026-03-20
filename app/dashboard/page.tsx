'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

    if (!currentUser) {
      router.push("/login");
      return;
    }

    const allTasks = JSON.parse(localStorage.getItem("tasks") || "{}");

    setTasks(allTasks[currentUser.email] || []);
  }, []);

  const addTask = () => {
    if (!newTask.trim()) return;

    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (!currentUser) return;

    const allTasks = JSON.parse(localStorage.getItem("tasks") || "{}");

    const userTasks = allTasks[currentUser.email] || [];

    const updatedTasks = [...userTasks, newTask];

    allTasks[currentUser.email] = updatedTasks;

    localStorage.setItem("tasks", JSON.stringify(allTasks));

    setTasks(updatedTasks);
    setNewTask("");
  };

  const deleteTask = (index: number) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (!currentUser) return;

    const allTasks = JSON.parse(localStorage.getItem("tasks") || "{}");

    const updatedTasks = tasks.filter((_, i) => i !== index);

    allTasks[currentUser.email] = updatedTasks;

    localStorage.setItem("tasks", JSON.stringify(allTasks));

    setTasks(updatedTasks);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    router.push("/login");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🎉 Dashboard</h1>

        <button onClick={logout}>Déconnexion</button>

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