import React from "react";
import NavBar from "./components/NavBar";
import HeroContent from "./components/Hero";
import MapContent from "./components/Map";
import OtherSection from "./components/Footer/OtherSection";
import FooterContent from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroContent />
      <MapContent />
      <OtherSection />
      <FooterContent />
    </>
  );
}

export default App;
