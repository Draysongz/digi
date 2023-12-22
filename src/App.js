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
import { getFirestore, doc, getDoc,  updateDoc, onSnapshot } from "@firebase/firestore";
import { app } from "./Components/firebase/Firebase";
import {Spinner, Flex} from '@chakra-ui/react'
import TransactionLoadBalancer from "./TransactionLoadBalancer";
import MainUserManagement from "./Admin/userManagement/MainUserManagement";
import Main from "./Admin/Theme/Main";
import MainPay from "./Admin/Paypal/MainPay";
import MainGif from "./Admin/Giftcards/MainGift";
import MainCrypt from "./Admin/Crypto/MainCrypt";
import Verify from "./Components/Verify";
import AOS from "aos";
import PageTransition from './PageTransition'
import About from "./Components/About";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";





function App() {
  const [userId, setUserId] = useState("")
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

  useEffect(() => {
    // Initialize AOS with your configuration
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 40,
      throttleDelay: 70,
      offset: 120,
      delay: 30,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);


  const db= getFirestore(app)
  const auth = getAuth(app)
  const user= auth.currentUser
  async function getCurrentUserUid() {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          unsubscribe();
          resolve(user.uid);
        } else {
          resolve(null);
        }
      });
    });
  }
  
  useEffect(() => {
    const getId = async () => {
      const userId = await getCurrentUserUid();
      setUserId(userId);
      let userRef
  
      // Now that userId is set, we can use it to create the Firestore document reference
      if (userId != null){
        userRef = doc(db, "users", userId);
        const manageActiveStatus = async () => {
          if (user) {
            // Set the user's status to "online" when the component mounts
            await updateDoc(userRef, {
              online: true
            });
          }
        };
    
        manageActiveStatus(); // Call manageActiveStatus when the component mounts
    
  
        const manageOffline = async ()=>{
          if(user){
            try {
              await updateDoc(userRef, {
                online : false
              })
              console.log('state changed before close')
            } catch (error) {
              console.log(error)
            }
          }
        }
  
    
        // Add a beforeunload event listener to manage the user's status when the app is closed or navigated away
        window.addEventListener('beforeunload', manageOffline );
  
      
    
        auth.onAuthStateChanged((user) => {
          if (user) {
            // When the user logs out, update their online status to "offline"
            updateDoc(userRef, {
              online: true
            });
          }else{
            updateDoc(userRef, {
              online : false
            })
          }
        });
      }else{
        return null
      }
    
  
    }
  
    getId(); // Call getId to set userId and set up Firestore operations
  }, [user, db, auth]);
  

  return (
    <div className="App">
      <Routes>
        {/* Public Pages*/}
        
        <Route path="/options" element={<Options />} />
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/about" element={<About />} />
        <Route path="/t&c" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

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
        <Route path='/admin/theme' element={<AdminPages><Main/></AdminPages>} />
        <Route path='/admin/giftcards' element={<AdminPages><MainGif/></AdminPages>} />
        <Route path='/admin/paypal' element={<AdminPages><MainPay/></AdminPages>} />
        <Route path='/admin/crypto' element={<AdminPages><MainCrypt/></AdminPages>} />
        
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

  if((userRole === 'User' || 'Sub-Admin') && (userStatus === 'active') ){
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
        setRoleChecked(true);
       // Set roleChecked to true when the user is not authenticated
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
    (userRole === 'Sub-Admin' || userRole === 'Admin' || userRole === 'Customer Care' || userRole === 'Crypto Merchant') &&
    userStatus === 'active'
  ) {
  return <>{children}</>
}else if (userRole === 'User'){
  return <Navigate to='/login' />
}else{
 return  <Navigate to='/forbidden' />
}
}


export default App;
