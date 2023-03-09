import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import { NavbarMain, NavbarBottom, Navbarparent } from "./MyStyles/Header";

const Header = () => {
  return (
    <NavbarMain>
      <nav class="container pt-4">
        <Navbarparent>
          <Link to="https://www.mentalyc.com" target="_blank" rel="noopener noreferrer" class="">
            <img src={Logo} alt="African Cobblers Logo" />
          </Link>
        </Navbarparent>
       
      </nav>
      <NavbarBottom></NavbarBottom>
    </NavbarMain>
  );
};

export default Header;
