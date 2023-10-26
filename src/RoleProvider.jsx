import { createContext, useContext, useEffect, useState } from "react";
import { getAuth } from "@firebase/auth";
import { app } from "./Components/firebase/Firebase";
import { getFirestore, doc, getDoc } from "@firebase/firestore";

// Create a context for the user role
const RoleContext = createContext();

// Custom hook to access the user role
export function useRole() {
  return useContext(RoleContext);
}

// RoleProvider component to manage user roles
export function RoleProvider({ children }) {
  const [userRole, setUserRole] = useState(null);

  // Use an effect to fetch and set the user's role when the component mounts
  useEffect(() => {
    const auth = getAuth(app);
    const user = auth.currentUser;
  
    if (user) {
      const db = getFirestore(app);
      const userRef = doc(db, "users", user.uid);
      const checkUserRole = async () => {
        try {
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const role = userDoc.data().role;
            console.log('User role found:', role); // Log the role
            setUserRole(role);
          } else {
            console.log('User document not found in Firestore.');
          }
        } catch (error) {
          console.error('Error while fetching user role:', error);
        }
      };
  
      checkUserRole(); // Call the checkUserRole function to set the user's role.
    }
  }, []);
  
  const contextValue = {
    userRole,
    checkUserRole: (role) => userRole === role,
  };

  return (
    <RoleContext.Provider value={contextValue}>
      {children}
    </RoleContext.Provider>
  );
}

export { RoleContext };
