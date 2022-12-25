import { useState, useEffect, useRef } from "react";

import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";

import { BiHomeHeart } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";

import HeaderItem from "../HeaderItem";
import NavLinkCard from "../NavLinkCard";

import "./index.css";

const navItemsList = [
  {
    id: "GLASSES",
    displayText: "Glasses",
  },
  {
    id: "SUNGLASSES",
    displayText: "Sunglasses",
  },
  {
    id: "HOME-TRYON",
    displayText: "Home Try-On",
  },
];

const navLinksList = [
  {
    id: 1,
    linkId: "GLASSES",
    displayText: "Mens's Glasses",
    imageUrl:
      "https://res.cloudinary.com/dlpgowt5s/image/upload/v1671729820/portrait-handsome-smiling-hipster-businessman-model-wearing-casual-summer-white-clothes_ss7sfm.jpg",
  },

  {
    id: 2,
    linkId: "GLASSES",
    displayText: "Women's Glasses",
    imageUrl:
      "https://res.cloudinary.com/dlpgowt5s/image/upload/v1671730526/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-female-office-manager-ceo-e-commerce-company-looking-pleased-camera-white-background_rtrrsk.jpg",
  },
  {
    id: 3,
    linkId: "SUNGLASSES",
    displayText: "Mens's Glasses",
    imageUrl:
      "https://res.cloudinary.com/dlpgowt5s/image/upload/v1671733680/portrait-cool-handsome-man-with-sunglasses_hgizuh.jpg",
  },
  {
    id: 4,
    linkId: "SUNGLASSES",
    displayText: "Women's Glasses",
    imageUrl:
      "https://res.cloudinary.com/dlpgowt5s/image/upload/v1671731388/stylish-young-woman-bright-pink-sports-jacket-fashionable-sunglasses-wireless-headphones-her-ears-white-background_nwqdfs.jpg",
  },
  {
    id: 5,
    linkId: "HOME-TRYON",
    imageUrl:
      "https://res.cloudinary.com/dlpgowt5s/image/upload/v1671731388/stylish-young-woman-bright-pink-sports-jacket-fashionable-sunglasses-wireless-headphones-her-ears-white-background_nwqdfs.jpg",
  },
];

const Header = () => {
  const [isClicked, setValue] = useState(false);
  const [isAccountActive, setAccountActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);
  const [isActive, setActive] = useState("");
  const [navLinks, setLinks] = useState([]);

  const updateActiveNav = (id) => {
    setLinks([...navLinksList.filter((each) => each.linkId === id)]);
    setActive(id);
  };

  const CollapseNavDetails = () => {
    setValue((prevValue) => true);
  };

  const onAccountClick = () => {
    setAccountActive((prevValue) => !prevValue);
  };

  const onSearchClick = () => {
    setSearchActive((prevValue) => !prevValue);
  };

  const preventScroll = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const navRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!navRef.current.contains(event.target)) {
        setValue(false);
        setActive("");
        document
          .querySelector(".body")
          .removeEventListener("wheel", preventScroll);
      }
    };

    if (isClicked === true) {
      document.querySelector(".body").addEventListener("wheel", preventScroll);
    }

    document.addEventListener("mousedown", handler);
  }, [isClicked]);

  const collapseNavBar = isClicked ? "collapse-navbar" : "";

  const accountRef = useRef();

  useEffect(() => {
    const accntHandler = (event) => {
      if (!accountRef.current.contains(event.target)) {
        setAccountActive(false);
      }
    };

    document.addEventListener("mousedown", accntHandler);
  }, [isAccountActive]);

  const searchRef = useRef();

  useEffect(() => {
    const searchHandler = (event) => {
      if (!searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };

    document.addEventListener("mousedown", searchHandler);
  }, [isSearchActive]);

  return (
    <>
      <div className="navbar-container" ref={navRef}>
        <nav className="nav-bar">
          <div className="nav-body">
            <div className="nav-icon-container">
              <img
                src="https://i.pinimg.com/736x/b8/28/76/b8287644c699251c0de78393830c62a8.jpg"
                alt="nav logo"
                className="nav-icon"
              />
              <p className="icon-name">EyeLux</p>
            </div>

            {/* Nav Links */}
            <ul className="nav-links-container">
              {navItemsList.map((each) => (
                <HeaderItem
                  linkDetails={each}
                  key={each.id}
                  CollapseNavDetails={CollapseNavDetails}
                  updateActiveNav={updateActiveNav}
                  isActive={isActive === each.id}
                />
              ))}
            </ul>

            {/* Icons */}
            <div className="account-icons-container">
              <BiSearchAlt className="account-icons" onClick={onSearchClick} />
              <AiOutlineShoppingCart className="account-icons" />
              <MdOutlineAccountCircle
                className="account-icons"
                onClick={onAccountClick}
              />
            </div>
          </div>
        </nav>
        {/* Collapse Containers */}
        <div className={`collapse-nav-container ${collapseNavBar}`}>
          {navLinks.map((each) => (
            <NavLinkCard key={each.id} cardDetails={each} />
          ))}
        </div>
        <div>
          <div
            ref={accountRef}
            className={`account-frame ${
              isAccountActive ? "active-account" : ""
            }`}
          >
            <div className="account-items-container">
              <p className="account-items">
                <BiHomeHeart />
                Home
              </p>
              <p className="account-items">
                <FaStore />
                Store
              </p>
              <p className="account-items">
                <RiQuestionAnswerLine />
                About
              </p>
              <p className="account-items">
                <FaHandsHelping />
                Help
              </p>
            </div>
            <button className="logout-button">Logout</button>
          </div>
        </div>
        <div
          ref={searchRef}
          className={`search-bar-container ${
            isSearchActive ? "active-search" : ""
          }`}
        >
          <input type="search" placeholder="Search" className="search-bar" />
        </div>
      </div>
    </>
  );
};

export default Header;
