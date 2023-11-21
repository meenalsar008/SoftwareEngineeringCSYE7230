import React from "react";
import Header from "./../components/Header";
import PharmaProducts from "./../components/homeComponents/PharmaProducts";
import Footer from "./../components/Footer";
import LandingHeader from "../components/LandingHeader";
import Extras from "../components/Extra";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <LandingHeader/>
      <PharmaProducts />
      <Extras/>
      <Footer />
    </div>
  );
};

export default HomeScreen;
