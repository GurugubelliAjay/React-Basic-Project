import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference from localStorage
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("bg-dark", "text-white");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      const navbar = document.querySelector(".navbar");
      if (newMode) {
        document.body.classList.add("bg-dark", "text-white");
        navbar.classList.add("navbar-dark", "bg-dark");
        navbar.classList.remove("navbar-light", "bg-light");
      } else {
        document.body.classList.remove("bg-dark", "text-white");
        navbar.classList.add("navbar-light", "bg-light");
        navbar.classList.remove("navbar-dark", "bg-dark");
      }

      // Save the user's preference in localStorage
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Product Store 🛒
        </Link>
        <div className="d-flex">
          <Link to="/create" className="btn btn-primary me-2">
            <i className="bi bi-plus-square"></i>
          </Link>
          <button
            className="btn btn-outline-secondary"
            id="colorModeToggle"
            onClick={toggleTheme}
          >
            <i className={`bi ${isDarkMode ? "bi-sun" : "bi-moon"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
