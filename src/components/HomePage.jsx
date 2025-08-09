// import HeroSection from "./components/HeroSection";
import Tokenomics from "./Tokenomics ";
import Roadmap from "./Roadmap";
import AboutUs from "./About";
import FooterStrip from "./FooterStrip";
import CopyStrip from "./CopyStrip";
import SocialStrip from "./twitter";
import NoteDisclaimer from "./Disclaimer";
import HeroSection from "./HeroSection";
import MemeCoinHeader from "./MemeCoinHeader";
const HomePage = () => {
  return (
    <>
      <MemeCoinHeader />
      <HeroSection />
      <CopyStrip />
      <Tokenomics />
      <Roadmap />
      <AboutUs />
      <SocialStrip />
      <NoteDisclaimer />
      {/* <FooterStrip /> */}
    </>
  );
};

export default HomePage;
