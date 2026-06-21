import api from "../services/api";

function TaskCard({ task, onUpdate, onDelete }) {
  const updateStatus = async () => {
    const nextStatus =
      task.status === "Pending"
        ? "In Progress"
        : task.status === "In Progress"
          ? "Completed"
          : "Completed";

    const res = await api.put(`/tasks/${task._id}`, {
      status: nextStatus,
    });

    onUpdate(res.data);
  };

  const deleteTask = async () => {
    await api.delete(`/tasks/${task._id}`);
    onDelete(task._id);
  };

  const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{task.title}</h3>

          <p className="text-slate-600 mt-2">{task.description}</p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm ${statusStyles[task.status]}`}
        >
          {task.status}
        </span>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={updateStatus}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Update
        </button>

        <button
          onClick={deleteTask}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
