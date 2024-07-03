"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface NavigationProps {
  isNavOpen: boolean;
  toggleNav: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isNavOpen, toggleNav }) => {
  return (
    <>
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <Sidebar isOpen={isNavOpen} toggle={toggleNav} />
    </>
  );
};

export default Navigation;