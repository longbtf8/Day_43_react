import { Link, NavLink } from "react-router"; // Đổi Link thành NavLink
import { useGetCurrentUserQuery } from "../services/auth";

const Navigation = () => {
  const { isSuccess } = useGetCurrentUserQuery();
  return (
    <div>
      <nav className="p-2.5 border-b-2 border-gray-500 flex justify-between items-center">
        <ul className="flex gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hocdemo"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-500"
              }
            >
              HOCDemo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/renderpropsdemo"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-500"
              }
            >
              Render Prop Demo
            </NavLink>
          </li>
        </ul>
        {isSuccess ? (
          <></>
        ) : (
          <div>
            <Link to="/login">
              <button className="border-2 mr-2 w-20 rounded-xl p-1 bg-blue-400 text-white cursor-pointer">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="border-2 rounded-xl p-1 bg-blue-400 text-white w-20 cursor-pointer">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
