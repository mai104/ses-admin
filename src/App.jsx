import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Overview from "./pages/overview";
import User from "./pages/user";
import Student from "./pages/student-management";
import Teacher from "./pages/teacher-management";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/not-found";
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <Routes>
        {/* Redirect unauthenticated users */}
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route 
          path="/Login" 
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        
        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/overview" element={<Overview />} />
            <Route path="/student-management" element={<Student />} />
            <Route path="/teacher-management" element={<Teacher />} />
            <Route path="/user" element={<User />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/Login" replace />} />
        )}

        {/* Handle 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// import { useTranslation } from "react-i18next";
// import "./i18n/i18n"; 

// function App() {
//   const { t, i18n } = useTranslation();

//   return (
//     <div>
//       <h1>{t("welcome")}</h1>
//       <p>{t("description")}</p>
      
//       <button onClick={() => i18n.changeLanguage("en")}>English</button>
//       <button onClick={() => i18n.changeLanguage("ar")}>العربية</button>
//     </div>
//   );
// }

// export default App;
