import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './component/Header/Header';
import Inventory from "./component/Inventory/Inventory";
import Login from "./component/Login/Login";
import NotFound from "./component/NotFound/NotFound";
import OrderReview from "./component/OrderReview/OrderReview";
import PlaceOrder from "./component/PlaceOrder/PlaceOrder";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Register from "./component/Register/Register";
import Shipping from "./component/Shipping/Shipping";
import Shop from './component/Shop/Shop';
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
        <Header/>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/orders">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder/>
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping/>
            </PrivateRoute>
            <Router path="/login">
              <Login/>
            </Router>
            <Router path="/register">
              <Register/>
            </Router>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
