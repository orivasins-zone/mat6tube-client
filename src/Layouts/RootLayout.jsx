import { Outlet } from "react-router-dom";
import Footer from "../P_Components/Footer";
import Navbar from "../P_Components/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="bg-[#111111]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
