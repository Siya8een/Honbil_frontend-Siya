import React, { Fragment, useState } from "react";
import About from "./components/About";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";
import CartProvider from "./shopSection/store/CartProvider";
import RentalSingle from "./showPAge/components/rentals/single-page/rental-single.jsx";
import Cart from "./shopSection/Cart/Cart";
import Signup from "./signup/signUp";
import Login from "./signup/login";

//AMAN CODE
import { AppProvider } from "./context/productcontext";
import Nav from "./rentalSection/Navbar/nav.jsx";
import NavRental from "./rentalSection/Navbar/rentalNav";
import Main from "./rentalSection/main/Main.jsx";
import Hero2 from "./rentalSection/Hero/Hero.jsx";
import Footer2 from "./rentalSection/Footer/footer";
import Rentals from "./rentalSection/Rental/rental.jsx";
import { Route, Link, Routes } from "react-router-dom";
// contact us section Aman routes
import Contact from "./Contact Us/contact";
import { ThemeProvider } from "styled-components";
import Footer3 from "./Footer/Footer";
//!SECTION single product / rental Shop details
import SingleProduct from "./shopSection/SingleShop";
import Carousel from "./Crousel/Carousel";
import NewSlider from "./NewSlider";
import Plans from "./events/Plans";

import EventForm from "./components/EventForm/EventForm";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Fragment>
                  <Navbar bgColor="bg-black" />
                  <Hero />
                  <About />
                  <Newsletter />
                </Fragment>
              }
            />
            <Route
              exact
              path="/rentals"
              element={
                <Fragment>
                  <Nav />
                  <Hero2 />
                  <Main />
                  <Rentals />
                  {/* <Carousel /> */}
                  <NewSlider />
                  <Footer2 />
                </Fragment>
              }
            />
            <Route
              exact
              path="/events"
              element={
                <Fragment>
                  {/* <Nav /> */}
                  <Plans />
                  <Footer2 />
                </Fragment>
              }
            />

            {/* <Route
              exact
              path="/rentals/:id"
              element={
                <Fragment>
                  <RentalSingle />
                </Fragment>
              }
            /> */}

            <Route
              exact
              path="/rentals/:id"
              element={
                <CartProvider>
                  {cartIsShown && <Cart onClose={hideCartHandler} />}
                  <NavRental onShowCart={showCartHandler} />
                  <SingleProduct />
                  <Footer2 />
                  {/* <Footer3 /> */}
                </CartProvider>
              }
            />

            <Route
              exact
              path="/login"
              element={
                <Fragment>
                  <Nav />
                  <Login />
                </Fragment>
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <Fragment>
                  <Nav />
                  <Signup />
                </Fragment>
              }
            />
            <Route
              exact
              path="/contact"
              element={
                <Fragment>
                  <Nav />
                  <Contact />
                  <Footer2 />
                </Fragment>
              }
            />
          </Routes>
        </AppProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
