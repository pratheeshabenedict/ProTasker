// src/components/Footer.jsx

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} TaskManager. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
