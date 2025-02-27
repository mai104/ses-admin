// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Overview from "./pages/overview";
// import User from "./pages/user";
// import Student from "./pages/student-management";
// import Teacher from "./pages/teacher-management";
// import Login from "./pages/Login.jsx";
// import NotFound from "./pages/not-found";
// import './index.css';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <BrowserRouter>
//       {isAuthenticated && <Navbar />}
//       <Routes>
//         {/* Redirect unauthenticated users */}
//         <Route path="/" element={<Navigate to="/Login" replace />} />
//         <Route 
//           path="/Login" 
//           element={<Login setIsAuthenticated={setIsAuthenticated} />} 
//         />
        
//         {/* Protected Routes */}
//         {isAuthenticated ? (
//           <>
//             <Route path="/overview" element={<Overview />} />
//             <Route path="/student-management" element={<Student />} />
//             <Route path="/teacher-management" element={<Teacher />} />
//             <Route path="/user" element={<User />} />
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/Login" replace />} />
//         )}

//         {/* Handle 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
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
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Overview from "./pages/overview";
// import User from "./pages/user";
// import Student from "./pages/student-management";
// import Teacher from "./pages/teacher-management";
// import Login from "./pages/Login.jsx";
// import NotFound from "./pages/not-found";
// import "./index.css";

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <BrowserRouter>
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <Navbar toggleSidebar={toggleSidebar} />
//       <Routes>
//         <Route path="/" element={<Overview />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/overview" element={<Overview />} />
//         <Route path="/student-management" element={<Student />} />
//         <Route path="/teacher-management" element={<Teacher />} />
//         <Route path="/user" element={<User />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useAuth } from '@/context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
    
//     const success = await login(email, password);
//     if (success) {
//       navigate('/dashboard');
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             {t('auth.login')}
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 {t('auth.email')}
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder={t('auth.email')}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 {t('auth.password')}
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder={t('auth.password')}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           {error && (
//             <div className="text-red-500 text-sm text-center">{error}</div>
//           )}

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               {t('auth.submit')}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// src/App.jsx
// src/App.jsx
// import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { TenantProvider } from './context/TenantContext';
// import { useState } from 'react';
// import { useAuth } from './context/AuthContext';

// // Layout Components
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

// // Pages
// import Login from './pages/auth/Login';
// import Overview from './pages/overview/index';
// import Users from './pages/Users/index';
// import Teachers from './pages/Teachers/index';
// import NotFound from './pages/not-found/index';

// // Layout component for authenticated pages
// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//       <div className="flex">
//         <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//         <main className="flex-1 p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// // Protected Route wrapper
// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   if (!user) {
//     // Redirect to login while saving the attempted location
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return <Layout>{children}</Layout>;
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <TenantProvider>
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/" element={<Navigate to="/overview" replace />} />
            
//             {/* Protected Routes */}
//             <Route
//               path="/overview"
//               element={
//                 <ProtectedRoute>
//                   <Overview />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/users"
//               element={
//                 <ProtectedRoute>
//                   <Users />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/teachers"
//               element={
//                 <ProtectedRoute>
//                   <Teachers />
//                 </ProtectedRoute>
//               }
//             />
            
//             {/* Fallback Route */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </TenantProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// };

// export default App;
// import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { TenantProvider } from './context/TenantContext';
// import { LanguageProvider } from './context/LanguageContext.jsx';
// import { useState } from 'react';
// import { useAuth } from './context/AuthContext';
// import PropTypes from 'prop-types';

// // Layout Components
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

// // Pages
// import Login from './pages/auth/Login';
// import Overview from './pages/overview/index';
// import Users from './pages/Users/index';
// import Teachers from './pages/Teachers/index';
// import NotFound from './pages/not-found/index';

// // Layout component for authenticated pages
// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [currentLang] = useState(localStorage.getItem('language') || 'en');
//   const isRTL = currentLang === 'ar';

//   return (
//     <div className={`min-h-screen bg-gray-100 ${isRTL ? 'rtl' : 'ltr'}`}>
//       <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//       <div className="flex">
//         <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//         <main className={`flex-1 p-6 ${isRTL ? 'mr-64' : 'ml-64'}`}>
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };

// // Protected Route wrapper
// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   if (!user) {
//     // Redirect to login while saving the attempted location
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return <Layout>{children}</Layout>;
// };

// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <LanguageProvider>
//         <AuthProvider>
//           <TenantProvider>
//             <Routes>
//               {/* Public Routes */}
//               <Route path="/login" element={<Login />} />
//               <Route path="/" element={<Navigate to="/overview" replace />} />
              
//               {/* Protected Routes */}
//               <Route
//                 path="/overview"
//                 element={
//                   <ProtectedRoute>
//                     <Overview />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/users"
//                 element={
//                   <ProtectedRoute>
//                     <Users />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/teachers"
//                 element={
//                   <ProtectedRoute>
//                     <Teachers />
//                   </ProtectedRoute>
//                 }
//               />
              
//               {/* Fallback Route */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </TenantProvider>
//         </AuthProvider>
//       </LanguageProvider>
//     </BrowserRouter>
//   );
// };

// export default App;

// import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { TenantProvider } from './context/TenantContext';
// import { LanguageProvider } from './context/LanguageContext';
// import { useState } from 'react';
// import { useAuth } from './context/AuthContext';
// import PropTypes from 'prop-types';

// // Layout Components
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

// // Pages
// import Login from './pages/auth/Login';
// import Overview from './pages/overview/index';
// import Users from './pages/Users/index';
// import Teachers from './pages/Teachers/index';
// import NotFound from './pages/not-found/index';

// // Layout component for authenticated pages
// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [currentLang] = useState(localStorage.getItem('language') || 'en');
//   const isRTL = currentLang === 'ar';

//   return (
//     <div className={`min-h-screen bg-gray-100 ${isRTL ? 'rtl' : 'ltr'}`}>
//       <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//       <div className="flex">
//         <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//         <main className={`flex-1 p-6 ${isRTL ? 'mr-64' : 'ml-64'}`}>
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };

// // Protected Route wrapper
// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   if (!user) {
//     // Redirect to login while saving the attempted location
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return <Layout>{children}</Layout>;
// };

// ProtectedRoute.propTypes = {
//   children: PropTypes.node.isRequired
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <LanguageProvider>
//         <AuthProvider>
//           <TenantProvider>
//             <Routes>
//               {/* Public Routes */}
//               <Route path="/login" element={<Login />} />
//               <Route path="/" element={<Navigate to="/overview" replace />} />
              
//               {/* Protected Routes */}
//               <Route
//                 path="/overview"
//                 element={
//                   <ProtectedRoute>
//                     <Overview />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/users"
//                 element={
//                   <ProtectedRoute>
//                     <Users />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/teachers"
//                 element={
//                   <ProtectedRoute>
//                     <Teachers />
//                   </ProtectedRoute>
//                 }
//               />
              
//               {/* Fallback Route */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </TenantProvider>
//         </AuthProvider>
//       </LanguageProvider>
//     </BrowserRouter>
//   );
// };

// export default App;
import { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import Overview from './pages/overview';

// Simple App component with routing
const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Simple routing
  const renderContent = () => {
    // Public routes
    if (currentPath === '/login') return <Login />;
    if (currentPath === '/forgot-password') return <ForgotPassword />;
    
    // Protected routes - redirect to login if not authenticated
    if (!isAuthenticated) {
      window.location.href = '/login';
      return null;
    }
    
    // Main protected routes
    if (currentPath === '/overview' || currentPath === '/') {
      return (
        <MainLayout>
          <Overview />
        </MainLayout>
      );
    }

    // Default - could be a 404 page
    return (
      <MainLayout>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
          <p className="mt-4">The page you're looking for doesn't exist.</p>
        </div>
      </MainLayout>
    );
  };

  return renderContent();
};

export default App;