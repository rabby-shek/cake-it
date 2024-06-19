import React, { useState, useEffect } from "react";
import BrandLogo from "../../assets/images/brand-logo.png";
import { CgMenuCake } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Function to handle scroll event
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the scroll position is greater than 0 to determine if scrolled
  useEffect(() => {
    if (scrollPosition > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src={BrandLogo} alt="brand-logo" className="logo" />
      </div>
      <div className="nav-links-container">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a href={item.path} className="nav-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <CgMenuCake className="menu-icon" onClick={handleShowNav} />
      </div>
      <ul
        className={`nav-list-mobile drop-shadow ${showNav ? "show-nav" : ""}`}
      >
        <IoMdClose
          className="close-icon"
          onClick={() => setShowNav(false)}
        />
        {navItems.map((item) => (
          <li key={item.id} className="nav-item-mobile">
            <a href={item.path} className="nav-link-mobile">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
