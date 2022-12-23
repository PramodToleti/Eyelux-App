import { useState, useEffect, useRef } from "react";

import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";

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
  const [isActive, setActive] = useState("");
  const [navLinks, setLinks] = useState([]);

  {
    /* Updating Nav Links List */
  }

  const updateActiveNav = (id) => {
    setLinks([...navLinksList.filter((each) => each.linkId === id)]);
    setActive(id);
  };

  {
    /* Updating Active Nav Link */
  }

  const CollapseNavDetails = () => {
    setValue((prevValue) => true);
  };

  {
    /* Navbar Collapse */
  }

  const preventScroll = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

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

  const navRef = useRef();

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
              <BiSearchAlt className="account-icons" />
              <AiOutlineShoppingCart className="account-icons" />
              <MdOutlineAccountCircle className="account-icons" />
            </div>
          </div>
        </nav>
        <div className={`collapse-nav-container ${collapseNavBar}`}>
          {navLinks.map((each) => (
            <NavLinkCard key={each.id} cardDetails={each} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
