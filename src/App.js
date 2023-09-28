import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { Login } from './pages/login';
import { Signup } from "./pages/signup";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BuyStock } from './pages/buyStock';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/stock/buy" element={<BuyStock />} />
      </Routes>
    </Router>
  );
}

export default App;
