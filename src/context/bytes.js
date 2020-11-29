import React, { useEffect, useState } from "react";
import { API, graphqlOperation, strike } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listBytes } from "../api/queries";
import { updateByte, processOrder } from "../api/mutations";

const ByteContext = React.createContext();

const ByteProvider = ({ children }) => {
  const [bytes, setBytes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBytes();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBytes = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listBytes,
        authMode: "API_KEY"
      });
      const bytes = data.listBytes.items;
      setBytes(bytes);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleBit = async (byte, customer) => {
    try {
      await API.graphql(graphqlOperation(updateByte, { input: {id: byte.id, index: byte.index, content: (1-parseInt(byte.content)).toString(), owner: customer} }));
      console.log("toggle is successful");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ByteContext.Provider value={{ bytes, loading, checkout, toggleBit }}>
      {children}
    </ByteContext.Provider>
  );
};

export { ByteContext, ByteProvider };
