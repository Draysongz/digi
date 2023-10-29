import React from 'react'
import {
Flex,
Box,
Text,
Modal,
Wrap,
WrapItem,
Avatar,


} from '@chakra-ui/react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc, onSnapshot } from "firebase/firestore";
import { app } from './Components/firebase/Firebase';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Userbar = () => {
    const navigate = useNavigate()
    const [userdata, setUserdata]= useState([])
    useEffect(() => {
      const auth = getAuth();
    
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.uid);
          const db = getFirestore(app);
          const docRef = doc(db, 'users', user.uid);
    
          // Listen for changes to the user's document
          const unsubscribeDoc = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data();
              console.log('User data:', userData);
              setUserdata(userData);
            } else {
              console.log('User document not found.');
            }
          });
    
          return () => {
            unsubscribeDoc(); // Clean up the document listener
          };
        } else {
          navigate('/login');
        }
      });
      return () => {
        unsubscribe(); // Clean up the auth listener
      };
    }, []);
  return (
    <Box>
         <Wrap>
                        <WrapItem>
                            <Avatar name={`${userdata.firstName} ${userdata.lastName}`} size='sm' src={userdata.userDp ? userdata.userDp : ''} />
                            </WrapItem>
                    </Wrap>
    </Box>
  )
}

export default Userbar