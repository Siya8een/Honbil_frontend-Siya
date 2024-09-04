import React from "react";
import Nav from "./Navbar/nav";
import Hero from "./Hero/Hero";
import Main from "./main/Main";
import Rentals from "./Rental/rental";
import Footer from "./Footer/footer";

const RentalSection = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Main />
      <Rentals className="renatals" />
      <Footer />
    </div>
  );
};

export default RentalSection;
