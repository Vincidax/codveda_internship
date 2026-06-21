import { useEffect, useState, useCallback } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // Stable fetch function
  const fetchTasks = useCallback(async () => {
    try {
      const res = await api.get(`/tasks?search=${search}&status=${status}`);

      setTasks(res.data.tasks || res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }, [search, status]);

  // Debounced effect (prevents cascading renders + API spam)
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchTasks();
    }, 400);

    return () => clearTimeout(timer);
  }, [fetchTasks]);

  // Add new task
  const addTask = (task) => {
    setTasks((prev) => [task, ...prev]);
  };

  // Update task
  const updateTask = (updated) => {
    setTasks((prev) => prev.map((t) => (t._id === updated._id ? updated : t)));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  return (
    <div>
      <Navbar />

      <TaskForm onTaskCreated={addTask} />

      {/* FILTERS */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex gap-4">
        <input
          className="flex-1 border rounded-lg px-4 py-2"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-slate-500">Total Tasks</h3>
          <p className="text-3xl font-bold">{tasks.length}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-slate-500">Completed</h3>
          <p className="text-3xl font-bold">
            {tasks.filter((t) => t.status === "Completed").length}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="text-slate-500">Pending</h3>
          <p className="text-3xl font-bold">
            {tasks.filter((t) => t.status !== "Completed").length}
          </p>
        </div>
      </div>

      {/* TASK LIST */}
      {tasks.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-10 text-center">
          <h3 className="text-xl font-semibold">No Tasks Found</h3>

          <p className="text-slate-500 mt-2">
            Create your first task to get started.
          </p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default Dashboard;
