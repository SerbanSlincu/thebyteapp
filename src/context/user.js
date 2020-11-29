import React, { useState, useEffect } from "react";
import Auth from '@aws-amplify/auth';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    fetchUserEmail();
  }, []);

  const fetchUserEmail = async () => {
    await Auth.currentAuthenticatedUser().then((user) => {
        setEmail(user.attributes.email);
    });
  };

  const getUserEmail = () => email;

  return (
    <UserContext.Provider value={{ getUserEmail, fetchUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };