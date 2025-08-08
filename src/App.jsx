import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MemeCoinHeader from "./components/MemeCoinHeader";
import HeroSection from "./components/HeroSection";
import Tokenomics from "./components/Tokenomics ";
import Roadmap from "./components/Roadmap";
import AboutUs from "./components/About";
import FooterStrip from "./components/FooterStrip";
import CopyStrip from "./components/CopyStrip";
import SocialStrip from "./components/twitter";

function App() {
  return (
    <>
      <MemeCoinHeader />
      <HeroSection />
      <CopyStrip />
      <Tokenomics />
      <Roadmap />
      <AboutUs />
      <SocialStrip />
      <FooterStrip />
    </>
  );
}

export default App;
