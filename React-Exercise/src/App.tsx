import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Settings from "./pages/settings";
import Navbar from "./components/navbar";
import Login from './pages/login';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

const AdminOnlyRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('user_role') === 'Admin';
  return isAuthenticated ? <>{children}</> : <Navigate to="/videos" replace />;
};

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  
  return (
    <>
      {!isLoginPage && <Navbar />}

      <div style={{ 
        paddingTop: isLoginPage ? '0' : '100px', 
        paddingLeft: '20px', 
        paddingRight: '20px' 
      }}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route 
            path="/videos" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <AdminOnlyRoute>
                <Settings />
              </AdminOnlyRoute>
            } 
          />
          
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
