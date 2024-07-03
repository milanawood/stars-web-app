"use client";
import React, { useState } from "react";
import Navigation from "./navigation";

const ClientNav: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return <Navigation isNavOpen={isNavOpen} toggleNav={toggleNav} />;
};

export default ClientNav;