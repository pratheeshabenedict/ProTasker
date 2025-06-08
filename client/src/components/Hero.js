// src/components/Hero.jsx
import { Link, useNavigate } from "react-router-dom";
import { ORG, SIMP, GET_STARTED } from "../constants/Constants";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export const Hero = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (user) {
      navigate("/tasksform");
    } else {
      navigate("/signup");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{ORG}</h1>
        <p className="text-lg text-gray-600 mb-6">{SIMP}</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleGetStarted}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            {GET_STARTED}
          </button>

          {user && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
