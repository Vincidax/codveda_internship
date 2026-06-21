import { useState, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* NAV */}
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4 w-full">
        <h1 className="text-2xl font-bold">TaskManager</h1>

        <div className="flex gap-4">
          <Link to="/">Back to Home</Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* FORM */}
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full border p-2 rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full border p-2 rounded"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
