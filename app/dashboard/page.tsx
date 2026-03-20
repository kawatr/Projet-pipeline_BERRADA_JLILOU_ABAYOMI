'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");

    if (!currentUser) {
      router.push("/login");
      return;
    }

    setUser(currentUser);

    const allTasks = JSON.parse(localStorage.getItem("tasks") || "{}");

    setTasks(allTasks[currentUser.email] || []);
  }, []);

  const addTask = () => {
    if (!newTask) return;

    const allTasks = JSON.parse(localStorage.getItem("tasks") || "{}");

    const userTasks = allTasks[user.email] || [];

    const updatedTasks = [...userTasks, newTask];

    allTasks[user.email] = updatedTasks;

    localStorage.setItem("tasks", JSON.stringify(allTasks));

    setTasks(updatedTasks);
    setNewTask("");
  };

  const deleteTask = (index: number) => {
    const allTasks = JSON.parse(localStorage.getItem("tasks") || "{}");

    const updatedTasks = tasks.filter((_, i) => i !== index);

    allTasks[user.email] = updatedTasks;

    localStorage.setItem("tasks", JSON.stringify(allTasks));

    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🎉 Dashboard</h1>
        <p>{user?.email}</p>

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