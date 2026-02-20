import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Settings from "./pages/settings";
import Navbar from "./components/navbar";
import Login from './pages/login';
import withAuth from './hoc/withAuth';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  const HomeWithAuth = withAuth(Home);
  const SettingsWithAuth = withAuth(Settings, { allowedRoles: ['Admin'] });

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

          <Route path="/videos" element={<HomeWithAuth />} />
          <Route path="/settings" element={<SettingsWithAuth />} />

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;