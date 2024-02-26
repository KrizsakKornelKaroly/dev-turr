"use client"
import React, { useState, useEffect } from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 931);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div>
      <div className={isMobile ? 'hidden' : 'block'}><NavbarDesktop /></div>
      <div className={isMobile ? 'block' : 'hidden'}><NavbarMobile /></div>
    </div>
  );
};

export default Navbar;
