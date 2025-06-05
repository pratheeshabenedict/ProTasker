// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import { LOGIN,SIGN_UP,TASKMANAGER } from "../constants/Constants";
export const NavBar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          {TASKMANAGER}
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-blue-500 font-medium">
            {LOGIN}
          </Link>
          <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            {SIGN_UP}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
