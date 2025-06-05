// src/components/CTA.jsx
import { Link } from "react-router-dom";
import { PRODUCTIVITY,START,MSG } from "../constants/Constants";
export const CTA = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">{PRODUCTIVITY}</h2>
        <p className="mb-6 text-lg">
          {MSG}
        </p>
        <Link
          to="/signup"
          className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200 font-semibold"
        >
          {START}
        </Link>
      </div>
    </section>
  );
};

export default CTA;
