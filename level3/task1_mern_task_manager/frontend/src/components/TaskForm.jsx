import { useState } from "react";
import api from "../services/api";

function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("/tasks", {
      title,
      description,
    });

    onTaskCreated(res.data);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Create Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded-lg px-4 py-3"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border rounded-lg px-4 py-3"
          placeholder="Description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
