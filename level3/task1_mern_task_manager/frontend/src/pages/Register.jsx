import { useState } from "react";
import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      navigate("/");
    } catch (err) {
      alert(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* NAV */}
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4 w-full">
        <h1 className="text-2xl font-bold">TaskManager</h1>

        <div className="flex gap-4">
          <Link to="/">Back to Home</Link>
          <Link to="/login" className="text-slate-600 hover:text-black">
            Login
          </Link>
        </div>
      </div>

      {/* FORM */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Register</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full border p-2 rounded"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full border p-2 rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full border p-2 rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
