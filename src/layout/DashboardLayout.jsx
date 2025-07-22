// src/layout/DashboardLayout.jsx
import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-700 transition duration-200";
  const activeClass = "bg-gray-700";

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5 space-y-6">
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
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
