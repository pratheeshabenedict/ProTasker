// src/components/Hero.jsx
import { Link } from "react-router-dom";
import { ORG,SIMP,GET_STARTED } from "../constants/Constants";
export const Hero = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {ORG}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {SIMP}
        </p>
        <Link to="/signup" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          {GET_STARTED}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
