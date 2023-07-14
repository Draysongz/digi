import Options from "./Components/Options";
import Home from "./Components/Home";
import Register from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Forgot from "./Components/Forgot";
import Reset from "./Components/Reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainDashboard from "./Components/Dashboard/MainDashboard";
import Transactions from "./Components/Dashboard/Transactions";
import CryptoDash from "./Components/Dashboard/Crypto/CryptoDash";
import {useEffect} from 'react

function App() {
  useEffect(() => {
    const showText = () => {
      var Tawk_API=Tawk_API||{};
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/64afbf6794cf5d49dc634bb2/1h5787csn';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    };
    
    window.addEventListener('load', showText);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', showText);
    };
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/options" element={<Options />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/crypto" element={<CryptoDash />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
