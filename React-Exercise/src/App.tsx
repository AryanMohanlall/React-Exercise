import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./components/navbar";
import Login from './pages/login';

const App = ()=>{
  const location = useLocation();
  
  return (
    <>
    {location.pathname !== "/" && <Navbar />}
    <div style={{ paddingTop: '100px', paddingLeft: '20px', paddingRight: '20px' }}>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/videos" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
    </>
  );
}

export default App;