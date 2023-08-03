import React, { useEffect, useState } from "react";
import Dash from "./Dash";
import { Flex, Spinner } from "@chakra-ui/react";
import { SideBarFunc } from "./SideBarFunc";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { app } from "../firebase/Firebase";

const MainDashboard = () => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState(null); // Change initial state to null

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
        const db = getFirestore(app);
        const docRef = doc(db, 'users', user.uid);
        getDoc(docRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data();
              console.log('User data:', userData);
              setUserdata(userData);
            } else {
              console.log('User document not found.');
            }
          })
          .catch((error) => {
            console.error('Error fetching user data:', error.message);
          });
      } else {
        setUserdata(null); // Set userdata to null when the user is not logged in
        toast.error('please login');
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Show the spinner while waiting for the authentication check
  if (userdata === null) {
    return (
      <Flex align="center" justify="center" height="100vh">
        <Spinner size="xl" color="blue.500" thickness='4px'
  speed='0.65s'
  emptyColor='gray.200' />
      </Flex>
    );
  }

  // Render the dashboard content when the user is logged in
  return (
    <Flex flexDir={["column", "column", "row"]}>
      <SideBarFunc />
      <Dash userData={userdata} />
    </Flex>
  );
};

export default MainDashboard;
