import "./App.css";
import MemeCoinHeader from "./components/MemeCoinHeader";
import FooterStrip from "./components/FooterStrip";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <MemeCoinHeader /> */}
      <Outlet />
      <FooterStrip />
    </>
  );
}

export default App;
