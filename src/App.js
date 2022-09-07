import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Checkout from "./Components/Checkout";
import CheckoutProduct from "./Components/CheckoutProduct";
import { UseStateProvider } from "./Components/Contexts/StateProvider";
import Login from "./Components/Login";
import auth from "./firbase";
import FooterNav from "./Components/FooterNav";
import Footer from "./Components/Footer";
import AuthContextProvider from "./Components/Contexts/AuthProvider";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import NoMatch from "./Components/NoMatch";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";
// import Protected from './Components/Contexts/Protected';

const promise = loadStripe(
  "pk_test_51Ld3t8LPq7D1MPJ6Nzjhk61uovou1szzQquLbZ8srvhSDFtIZDqazEowmcFrFAH5qSF4c1a1L9EKfSYPfuRDe7Gp00SWWecz92"
);
const App = () => {
  const [loading, setLoading] = useState(false);
  let [color] = useState("Orange");
  const [{ basket }, dispatch] = UseStateProvider();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch({
          type: "user",
          user: authuser,
        });
      } else {
        dispatch({
          type: "user",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <ClimbingBoxLoader
          className="text-center d-flex justify-content-center align-item-center w-100 vh-100"
          color={color}
          loading={loading}
          size={20}
        />
      ) : (
        <AuthContextProvider className="displaying_area">
          <Header />
          <Nav />
          <Routes>
            <Route index element={<Banner />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route
              path="/Checkoutproduct"
              element={basket?.map((item) => (
                <CheckoutProduct
                  className="d-flex"
                  id={item.id}
                  title={item.tit}
                  price={item.pri}
                  img_1={item.one}
                  img_2={item.two}
                  img_3={item.three}
                  rip={item.rip}
                  zip={item.zip}
                  rating={item.rate}
                />
              ))}
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/Payment"
              element={
                <>
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </>
              }
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <FooterNav />
          <Footer />
        </AuthContextProvider>
      )}
    </>
  );
};

export default App;

// +  Deploy complete!

// Project Console: https://console.firebase.google.com/project/clone-8bc56/overview
// Hosting URL: https://clone-8bc56.web.app
