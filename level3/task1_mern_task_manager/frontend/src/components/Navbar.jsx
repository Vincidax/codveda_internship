import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white rounded-xl shadow-sm px-6 py-4 mb-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Task Manager</h1>

        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-600">{user?.name}</span>

          {user?.role === "admin" && (
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs">
              Admin
            </span>
          )}

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
