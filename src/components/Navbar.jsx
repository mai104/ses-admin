import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="space-x-4">
        <Link to="/overview" className="hover:underline">Overview</Link>
        <Link to="/student-management" className="hover:underline">Students</Link>
        <Link to="/teacher-management" className="hover:underline">Teachers</Link>
        <Link to="/user" className="hover:underline">Users</Link>
        <Link to="/login" className="hover:underline">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
