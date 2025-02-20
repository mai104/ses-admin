import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  HomeIcon,
  UserIcon,
  SunIcon,
  MoonIcon,
  InformationCircleIcon,
  Bars3Icon, // أيقونة القائمة
} from "@heroicons/react/24/solid";

function Navbar({ toggleSidebar }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "enabled") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("darkMode", "enabled");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("darkMode", "disabled");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="w-full h-auto min-h-[70px] bg-gray-100 dark:bg-gray-800 shadow-md flex justify-between items-center px-4 md:px-6">
      <button onClick={toggleSidebar} className="p-2">
        <Bars3Icon className="w-8 h-8 text-gray-700 dark:text-white" />
      </button>
      <ul className="flex gap-8 items-center">
        <li>
          <Link to="/cabins">
            <HomeIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <InformationCircleIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link to="/account">
            <UserIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600"
          >
            {isDarkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

// إضافة PropTypes للتحقق من صحة الـ props
Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
