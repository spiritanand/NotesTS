import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {useOutlet} from "react-router-dom";

const RootLayout = () => {
  const outlet = useOutlet();
  
  return (
	<>
	  <Navbar></Navbar>
	  {outlet}
	  <Footer></Footer>
	</>
  );
};

export default RootLayout;
