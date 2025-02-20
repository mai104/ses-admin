import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./pages/overview";
import User from "./pages/user";
import Student from "./pages/student-management";
import Teacher from "./pages/teacher-management";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/not-found";
import "./index.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/student-management" element={<Student />} />
        <Route path="/teacher-management" element={<Teacher />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
