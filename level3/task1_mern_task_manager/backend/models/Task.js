import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
  },
  {
    timestamps: true,
  },
);

taskSchema.index({ createdBy: 1 });
taskSchema.index({ status: 1 });
taskSchema.index({ title: "text" });

export default mongoose.model("Task", taskSchema);
