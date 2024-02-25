"use client";
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { logout } from '@/lib/actions/auth.action';

//chang a to Navlink
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  //context
  // const { isLoggedIn } = useAuth();
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef?.current?.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header full f1 bod htm" id="header">
      <nav className="navbar container">
        <a href="/" className="brand">
          AgroTech
        </a>

        <div
          className={`menu ${isMenuOpen ? "is-active" : ""}`}
          ref={menuRef}
          id="menu"
        >
          <ul className="menu-inner">
            {isLoggedIn ? (
              <>
                <li className="menu-item">
                  <a href="/dashboard" className="menu-link" onClick={closeMenu}>
                    Dashboard
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link" onClick={async()=>{
                    closeMenu();
                    await logout();
                  }}>
                    LogOut
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="menu-item">
                  <a href="/register" className="menu-link" onClick={closeMenu}>
                    {" "}
                    Register{" "}
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/login " className="menu-link" onClick={closeMenu}>
                    {" "}
                    Login{" "}
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="burger" id="burger" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
