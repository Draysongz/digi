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
import Setting from "./Components/Dashboard/Setting";
import { useEffect } from "react";
import SellCrypto from "./Components/Dashboard/Crypto/SellCrypto";
import SellConverter from "./Components/Dashboard/Crypto/SellConverter";
import SellCheckout from "./Components/Dashboard/Crypto/SellCheckout";
import SellProof from "./Components/Dashboard/Crypto/SellProof";
import SellFinalCheckout from "./Components/Dashboard/Crypto/SellFinalCheckout";
import "aos/dist/aos.css";
import BuyCrypto from "./Components/Dashboard/Crypto/Buy/BuyCrypto";
import VerificationPage from "./Components/Dashboard/Crypto/Buy/VerificationPage";
import BvnPage from "./Components/Dashboard/Crypto/Buy/BvnPage";
import BuyConverter from "./Components/Dashboard/Crypto/Buy/BuyConverter";
import BuyProof from "./Components/Dashboard/Crypto/Buy/BuyProof";
import BuyCheckout from "./Components/Dashboard/Crypto/Buy/BuyCheckout";
import NinPage from "./Components/Dashboard/Crypto/Buy/NinPage";
import BuyFinalCheckout from "./Components/Dashboard/Crypto/Buy/BuyFinalCheckout";

function App() {
  useEffect(() => {
    const showText = () => {
      var Tawk_API = Tawk_API || {};
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/64afbf6794cf5d49dc634bb2/1h5787csn";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    };

    showText();
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
        <Route path="/settings" element={<Setting />} />
        <Route path="/sellcrypto" element={<SellCrypto />} />
        <Route path="/sellconverter" element={<SellConverter />} />
        <Route path="/sellcheckout" element={<SellCheckout />} />
        <Route path="/sellproof" element={<SellProof />} />
        <Route path="/sellfinalcheckout" element={<SellFinalCheckout />} />
        <Route path="/buycrypto" element={<BuyCrypto />} />
        <Route path="/bvnpg" element={<BvnPage />} />
        <Route path="/ninpg" element={<NinPage />} />
        <Route path="/buyconverter" element={<BuyConverter />} />
        <Route path="/buyproof" element={<BuyProof />} />
        <Route path="/buycheckout" element={<BuyCheckout />} />
        <Route path="/verificationpg" element={<VerificationPage />} />
        <Route path="/buyfinalcheckout" element={<BuyFinalCheckout/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
