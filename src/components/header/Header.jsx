import React, { useState } from "react";
import BrandLogo from "../../assets/images/brand-logo.png";
import { CgMenuCake } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const navItems = [
    {
      id: 1,
      title: "Home",
      path: "#home",
    },
    {
      id: 2,
      title: "About US",
      path: "#about",
    },
    {
      id: 3,
      title: "Services",
      path: "#services",
    },
    {
      id: 4,
      title: "Contact",
      path: "#contact",
    },
  ];
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="header">
      <div className="logo-container">
        <img src={BrandLogo} alt="brand-logo" className="logo" />
      </div>
      <div className="nav-links-container">
        <ul className="nav-list">
          {navItems.map((item) => {
            return (
              <li key={item.id} className="nav-item">
                <a href={item.path} className="nav-link">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <CgMenuCake className="menu-icon" onClick={handleShowNav} />
      </div>
      <ul
        className={`nav-list-mobile drop-shadow ${showNav ? "show-nav" : ""}`}
      >
        <IoMdClose className="close-icon" onClick={() => setShowNav(false)} />
        {navItems.map((item) => {
          return (
            <li key={item.id} className="nav-item-mobile">
              <a href={item.path} className="nav-link-mobile">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
