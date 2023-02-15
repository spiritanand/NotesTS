import React from "react";
import {Navbar} from "react-bootstrap";
import {useOutlet} from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";

const RootLayout = () => {
  const outlet = useOutlet();
  
  return (
	<>
	  <NavbarComponent></NavbarComponent>
	  {outlet}
	  <Footer></Footer>
	</>
  );
};

export default RootLayout;
