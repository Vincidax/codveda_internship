import Task from "../models/Task.js";

// CREATE TASK
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      createdBy: req.user._id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getTasks = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, search, sort } = req.query;

    const query = {};

    // USER RESTRICTION
    if (req.user.role !== "admin") {
      query.createdBy = req.user._id;
    }

    // FILTER BY STATUS
    if (status) {
      query.status = status;
    }

    // SEARCH BY TITLE
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    // SORT OPTION
    let sortOption = { createdAt: -1 }; // default newest first

    if (sort === "oldest") {
      sortOption = { createdAt: 1 };
    } else if (sort === "latest") {
      sortOption = { createdAt: -1 };
    }

    const tasks = await Task.find(query)
      .populate("createdBy", "name email")
      .sort(sortOption)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Task.countDocuments(query);

    res.json({
      tasks,
      totalPages: Math.ceil(total / limit),
      currentPage: Number(page),
      totalTasks: total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Only owner or admin
    if (
      task.createdBy.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (
      task.createdBy.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await task.deleteOne();

    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
