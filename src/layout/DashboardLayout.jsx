// src/layout/DashboardLayout.jsx
import { Outlet, NavLink, Link } from "react-router-dom";

const DashboardLayout = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-gray-700 transition duration-200";
  const activeClass = "bg-gray-700";

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 space-y-6 bg-gray-900 p-5 text-white shadow-md">
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
            <p className="mb-2 mt-4 text-sm uppercase text-gray-400">
              Experience
            </p>
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
            <p className="mb-2 mt-4 text-sm uppercase text-gray-400">
              Education
            </p>
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
            <p className="mb-2 mt-4 text-sm uppercase text-gray-400">Skills</p>
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
          <div>
            <p className="mb-2 mt-4 text-sm uppercase text-gray-400">
              Portfolio
            </p>
            <NavLink
              to="/dashboard/create-portfolio"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Create Portfolio
            </NavLink>
            <NavLink
              to="/dashboard/update-portfolio/1"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Update Portfolio
            </NavLink>
          </div>

          <div>
            <p className="mb-2 mt-4 text-sm uppercase text-gray-400">
              Services
            </p>
            <NavLink
              to="/dashboard/create-service"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Create Service
            </NavLink>
            <NavLink
              to="/dashboard/update-service/1"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Update Service
            </NavLink>
          </div>
          <div>
            <p className="mb-2 mt-4 text-sm uppercase text-gray-400">
              Testimonials
            </p>
            <NavLink
              to="/dashboard/create-testimonial"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Create Testimonial
            </NavLink>
            <NavLink
              to="/dashboard/update-testimonial/1"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Update Testimonial
            </NavLink>
          </div>
          <div>
            <p className="mb-2 mt-4 text-sm uppercase text-gray-400">
              Blogs
            </p>
            <NavLink
              to="/dashboard/create-blog"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Create Blog
            </NavLink>
            <NavLink
              to="/dashboard/update-blog/1"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              Update Blog
            </NavLink>
          </div>
        </nav>

        {/* Back to Home Button */}
        <div className="pt-8">
          <Link
            to="/"
            className="block rounded bg-blue-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-h-screen flex-1 bg-black p-6 text-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
