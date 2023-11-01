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
import { useEffect, useState } from "react";
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
import MainGift from "./Components/Dashboard/Giftcard/MainGift";
import MainAdmin from "./Admin/MainAdmin";
import Profile from "./Admin/Profile/MainProfile";
import Password from './Admin/Password/MainPassword'
import MainComplaints from "./Admin/Complaints/MainComplaints";
import MainChat from "./Admin/Complaints/Chat/MainChat";
import Complaints from './Components/Dashboard/Complaints/MainComplaints'
import UserChat from './Components/Dashboard/Complaints/MainChat'
import MainTransaction from "./Admin/Transaction/MainTransaction";
import ForbiddenPage from "./ForbiddenPage";
import { Navigate, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { app } from "./Components/firebase/Firebase";
import {Spinner, Flex} from '@chakra-ui/react'
import TransactionLoadBalancer from "./TransactionLoadBalancer";
import MainUserManagement from "./Admin/userManagement/MainUserManagement";



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
        {/* Public Pages*/}
        <Route path="/options" element={<Options />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />

            {/* Error Pages*/}
        <Route path="/forbidden" element={<ForbiddenPage/>} />

        {/* User Pages*/}
        <Route path="/dashboard" element={<UserPages><MainDashboard /></UserPages>} />
        <Route path="/transactions" element={<UserPages><Transactions /> </UserPages>}  />
        <Route path="/crypto" element={<UserPages><CryptoDash /></UserPages>} />
        <Route path="/settings" element={<UserPages><Setting /></UserPages>} />
        <Route path="/sellcrypto" element={<UserPages><SellCrypto /></UserPages>} />
        <Route path="/sellconverter" element={<UserPages><SellConverter /></UserPages>} />
        <Route path="/sellcheckout" element={<UserPages><SellCheckout /></UserPages>} />
        <Route path="/sellproof" element={<UserPages><SellProof /></UserPages>} />
        <Route path="/sellfinalcheckout" element={<UserPages><SellFinalCheckout /></UserPages>} />
        <Route path="/buycrypto" element={<UserPages><BuyCrypto /> </UserPages>} />
        <Route path="/bvnpg" element={<UserPages><BvnPage /></UserPages>} />
        <Route path="/ninpg" element={<UserPages><NinPage /></UserPages>} />
        <Route path="/buyconverter" element={<UserPages><BuyConverter /> </UserPages>} />
        <Route path="/buyproof" element={<UserPages><BuyProof /></UserPages>} />
        <Route path="/buycheckout" element={<UserPages><BuyCheckout /> </UserPages>} />
        <Route path="/verificationpg" element={<UserPages><VerificationPage /> </UserPages>} />
        <Route path="/buyfinalcheckout" element={<UserPages><BuyFinalCheckout/></UserPages>} />
        <Route path="/giftcards" element={<UserPages><MainGift/></UserPages>} />
        <Route path="/user/chat" element={<UserPages><UserChat/></UserPages>} />
        <Route path= '/user/complaints' element={<UserPages><Complaints/></UserPages>} />


        {/* Admin Pages */}
        <Route path='/admin/dashboard' element={<AdminPages><MainAdmin/></AdminPages>} />
        <Route path="/admin/profile" element={<AdminPages><Profile /> </AdminPages>} />
        <Route path="/admin/password" element={<AdminPages><Password /> </AdminPages>} />
        <Route path="/admin/complaints" element={<AdminPages><MainComplaints/> </AdminPages>} />
        <Route path="/admin/chat" element={<AdminPages><MainChat/> </AdminPages>} />
        <Route path='/admin/transaction' element={<AdminPages><MainTransaction/></AdminPages>} />
        <Route path='/admin/usermanagement' element={<AdminPages><MainUserManagement/></AdminPages>} />
      </Routes>
      <TransactionLoadBalancer />
      <ToastContainer />
    </div>
  );
}

function UserPages({children}){
  const [userRole, setUserRole] = useState(null);
  const [roleChecked, setRoleChecked] = useState(false);
  const [userStatus, setUserStatus] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(app);
    const db = getFirestore(app);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const role = userDoc.data().role;
            const status = userDoc.data().status
            setUserRole(role);
            setUserStatus(status)
          } else {
            console.error("User document not found in Firestore.");
          }
        } catch (error) {
          console.error("Error while fetching user role:", error);
        } finally {
          setRoleChecked(true); // Set roleChecked to true when done
        }
      } else {
        setRoleChecked(true); // Set roleChecked to true when the user is not authenticated
      }
    });
  },[userRole, userStatus, roleChecked, navigate]);

  if (!roleChecked) {
    return(
      <Flex align="center" justify="center" height="100vh">
      <Spinner size="xl" color="blue.500" thickness='4px'
speed='0.65s'
emptyColor='gray.200' />
    </Flex>
    )
  }

  if(userRole === 'user' || 'sub-admin' && userStatus === 'active' ){
  return <>{children}</>
}else{
 return  <Navigate to='/forbidden' />
}
}

function AdminPages({children}){
  const [userStatus, setUserStatus] = useState(null)
  const [userRole, setUserRole] = useState(null);
  const [roleChecked, setRoleChecked] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    const auth = getAuth(app);
    const db = getFirestore(app);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const role = userDoc.data().role;
            const status = userDoc.data().status
            setUserRole(role);
            setUserStatus(status)
            console.log(status)
          } else {
            console.error("User document not found in Firestore.");
          }
        } catch (error) {
          console.error("Error while fetching user role:", error);
        } finally {
          setRoleChecked(true); // Set roleChecked to true when done
        }
      } else {
        setRoleChecked(true); // Set roleChecked to true when the user is not authenticated
      }
    });
  }, [userRole, userStatus, roleChecked, navigate]);

  if (!roleChecked) {
    return(
      <Flex align="center" justify="center" height="100vh">
      <Spinner size="xl" color="blue.500" thickness='4px'
speed='0.65s'
emptyColor='gray.200' />
    </Flex>
    )
  }
  if (
    (userRole === 'Sub-admin' || userRole === 'Admin' || userRole === 'Customer Care' || userRole === 'Merchant') &&
    userStatus === 'active'
  ) {
  return <>{children}</>
}else{
 return  <Navigate to='/forbidden' />
}
}


export default App;
