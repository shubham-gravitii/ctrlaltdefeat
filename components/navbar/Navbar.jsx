"use client";
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
// import { useSession } from 'next-auth/react';
// import { redirect } from 'next/navigation';


//chang a to Navlink
const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  //context
  // const { isLoggedIn } = useAuth();
  const [isLoggedIn, setisLoggedIn] = useState(false);

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


  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/')
  //   }
  // });

  // console.log(session?.user);

  return (
    <header className="header full f1 bod htm" id="header">
      <nav className="navbar container">
        <a href="/" className="brand">
          Brand
        </a>

        <div
          className={`menu ${isMenuOpen ? "is-active" : ""}`}
          ref={menuRef}
          id="menu"
        >
          <ul className="menu-inner">
            {isLoggedIn ? (
              <li className="menu-item">
                <a href="/logout" className="menu-link" onClick={closeMenu}>
                  LogOut
                </a>
              </li>
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
