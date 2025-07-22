// src/layout/DashboardLayout.jsx
import { Outlet, NavLink, Link } from "react-router-dom";

const DashboardLayout = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-700 transition duration-200";
  const activeClass = "bg-gray-700";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5 space-y-6 shadow-md">
        <h2 className="text-2xl font-bold">Dashboard</h2>

        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Dashboard Home
          </NavLink>


          <div>
            <p className="text-sm uppercase text-gray-400 mb-2 mt-4">Experience</p>
            <NavLink
              to="/dashboard/create-experience"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Create Experience
            </NavLink>
            <NavLink
              to="/dashboard/update-experience/1"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Update Experience
            </NavLink>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-400 mb-2 mt-4">Education</p>
            <NavLink
              to="/dashboard/create-education"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Create Education
            </NavLink>
            <NavLink
              to="/dashboard/update-education/1"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Update Education
            </NavLink>
          </div>
          <div>
            <p className="text-sm uppercase text-gray-400 mb-2 mt-4">Skills</p>
            <NavLink
              to="/dashboard/create-skill"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Create Skill
            </NavLink>
            <NavLink
              to="/dashboard/update-skill/1"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Update Skill
            </NavLink>
          </div>
        </nav>

        {/* Back to Home Button */}
        <div className="pt-8">
          <Link
            to="/"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            ← Back to Home
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-black min-h-screen text-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
