import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Amplify
import Amplify from "aws-amplify";

// Pages
import Error from "./pages/Error";
import Bytes from "./pages/Bytes";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ByteDetails from "./pages/ByteDetails";
import Admin from './pages/Admin';

// Components
import Header from "./components/Header"

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Bytes />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route
          path="/bit/:id"
          children={<ByteDetails></ByteDetails>}>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
