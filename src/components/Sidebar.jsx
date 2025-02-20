import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import {
//   ChevronDownIcon,
//   ChevronRightIcon,
//   HomeIcon,
//   UserIcon,
//   CalendarDaysIcon,
//   XMarkIcon, // زر الإغلاق
// } from "@heroicons/react/24/solid";

const navLinks = [
  { type: "text", name: "Main Menu" },
  {
    type: "link",
    name: "OverView",
    href: "/account/overview",
    icon: (
      <img src="/icons/dashboard.svg" className="h-5 w-5 text-primary-600" />
    ),
    subLinks: [],
  },
  { type: "text", name: "Users Menu" },
  {
    type: "link",
    name: "Student Management",
    href: "/account/student",
    icon: <img src="/icons/Student.svg" className="h-5 w-5 text-primary-600" />,
    subLinks: [
      { name: "Add Student", href: "/account/student/add" },
      { name: "View Students", href: "/account/student/view" },
    ],
  },
  {
    type: "link",
    name: "Teacher Management",
    href: "/account/teacher",
    icon: <img src="/icons/Student.svg" className="h-5 w-5 text-primary-600" />,
    subLinks: [
      { name: "Add Teacher", href: "/account/teacher/add" },
      { name: "View Teachers", href: "/account/teacher/view" },
    ],
  },
  { type: "text", name: "Users Menu" },
  {
    type: "link",
    name: "Teacher Management",
    href: "/account/teacher",
    icon: <img src="/icons/Student.svg" className="h-5 w-5 text-primary-600" />,
    subLinks: [
      { name: "Add Teacher", href: "/account/teacher/add" },
      { name: "View Teachers", href: "/account/teacher/view" },
    ],
  },
  {
    type: "link",
    name: "Teacher Management",
    href: "/account/teacher",
    icon: <img src="/icons/Student.svg" className="h-5 w-5 text-primary-600" />,
    subLinks: [
      { name: "Add Teacher", href: "/account/teacher/add" },
      { name: "View Teachers", href: "/account/teacher/view" },
    ],
  },
  {
    type: "link",
    name: "Teacher Management",
    href: "/account/teacher",
    icon: <img src="/icons/Student.svg" className="h-5 w-5 text-primary-600" />,
    subLinks: [
      { name: "Add Teacher", href: "/account/teacher/add" },
      { name: "View Teachers", href: "/account/teacher/view" },
    ],
  },
  { type: "text", name: "Users Menu" },

  {
    type: "link",
    name: "Teacher Management",
    href: "/account/teacher",
    icon: <img src="/icons/Student.svg" className="h-5 w-5 text-primary-600" />,
    subLinks: [
      { name: "Add Teacher", href: "/account/teacher/add" },
      { name: "View Teachers", href: "/account/teacher/view" },
    ],
  },
  {
    type: "link",
    name: "Teacher Management",
    href: "/account/teacher",
    icon: <img src="/icons/Student.svg" className="h-5 w-5 text-primary-600" />,
    subLinks: [
      { name: "Add Teacher", href: "/account/teacher/add" },
      { name: "View Teachers", href: "/account/teacher/view" },
    ],
  },
  { type: "text", name: "Users Menu" },
  {
    type: "link",
    name: "Teacher Management",
    href: "/account/teacher",
    icon: <img src="/icons/Student.svg" className="h-5 w-5 text-primary-600" />,
    subLinks: [
      { name: "Add Teacher", href: "/account/teacher/add" },
      { name: "View Teachers", href: "/account/teacher/view" },
    ],
  },
];

function Sidebar({ isOpen, toggleSidebar }) {
  const [openLink, setOpenLink] = useState(null);
  const toggleSubmenu = (index) =>
    setOpenLink(openLink === index ? null : index);

  return (
    <div
      className={`fixed top-0 left-0 w-[250px] bg-white dark:bg-gray-900 text-black dark:text-white h-full shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out overflow-y-auto overflow-x-hidden`}
    >
      <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
        <span className="text-lg font-bold">Dashboard</span>
        <button onClick={toggleSidebar} className="p-2">
          <img
            src="/icons/Student.svg"
            className="h-6 w-6 text-gray-700 dark:text-white"
          />
        </button>
      </div>

      <nav className="border-r border-primary-900 dark:border-primary-700 w-full">
        <ul className="flex flex-col gap-0 text-lg px-2">
          {navLinks.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              {item.type === "link" ? (
                <div>
                  <div className="py-3 px-4 flex items-center justify-between ">
                    <Link
                      to={item.href}
                      className="flex items-center gap-4 text-black dark:text-white no-underline hover:text-gray-700 dark:hover:text-gray-300 flex-grow"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                    {item.subLinks.length > 0 && (
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="ml-auto"
                      >
                        {openLink === index ? (
                          <img src="/icons/Student.svg" className="h-5 w-5" />
                        ) : (
                          <img src="/icons/Student.svg" className="h-5 w-5" />
                        )}
                      </button>
                    )}
                  </div>
                  {item.subLinks.length > 0 && openLink === index && (
                    <ul className="ml-6 mt-2 space-y-2">
                      {item.subLinks.map((subLink) => (
                        <li key={subLink.name}>
                          <Link className="block py-2 px-5" to={subLink.href}>
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <div className="px-5 py-2 text-sm font-bold">{item.name}</div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
