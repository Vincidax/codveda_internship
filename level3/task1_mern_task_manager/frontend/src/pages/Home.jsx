import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* NAV */}
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
        <h1 className="text-2xl font-bold">TaskManager</h1>

        <div className="flex gap-4">
          <Link to="/login" className="text-slate-600 hover:text-black">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mt-20 px-4">
        <h2 className="text-5xl font-bold leading-tight">
          Organize your tasks <br />
          like a pro 🚀
        </h2>

        <p className="text-slate-600 mt-6 text-lg">
          A simple and powerful task manager built with MERN stack. Track,
          manage, and complete your work efficiently.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Start Free
          </Link>

          <Link
            to="/login"
            className="border border-slate-400 px-6 py-3 rounded-lg hover:bg-white"
          >
            Login
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-20 px-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg">Simple UI</h3>
          <p className="text-slate-600 mt-2">
            Clean and easy-to-use interface for managing tasks.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg">Fast Performance</h3>
          <p className="text-slate-600 mt-2">
            Optimized backend API with fast MongoDB queries.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold text-lg">Secure Auth</h3>
          <p className="text-slate-600 mt-2">
            JWT-based authentication with role support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
