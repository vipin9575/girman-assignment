import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import companyLogo from "../assets/girman-logo.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("search");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Section */}
        <div className="flex items-center">
          <Link
            to="/"
            className="text-black no-underline flex items-center space-x-2"
          >
            <img src={companyLogo} alt="Logo" className="h-14 w-14" />{" "}
            <div>
              <div className="text-3xl font-bold">Girman</div>{" "}
              <div className="text-sm font-medium tracking-[0.24rem]">
                Technologies
              </div>{" "}
            </div>
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex space-x-2">
          <Link to="/" className="no-underline">
            <Button
              variant="text"
              color="primary"
              className={`text-lg uppercase ${
                activeButton === "search" ? "text-blue-500 underline" : ""
              }`}
              onClick={() => handleClick("search")}
            >
              Search
            </Button>
          </Link>
          <Link
            to="https://girmantech.com/"
            target="_blank"
            className="no-underline"
          >
            <Button
              variant="text"
              color="primary"
              className={`text-lg uppercase ${
                activeButton === "website" ? "text-blue-500 underline" : ""
              }`}
              onClick={() => handleClick("website")}
            >
              Website
            </Button>
          </Link>
          <Link
            to="https://www.linkedin.com/company/girmantech"
            target="_blank"
            className="no-underline"
          >
            <Button
              variant="text"
              color="primary"
              className={`text-lg uppercase ${
                activeButton === "linkedin" ? "text-blue-500 underline" : ""
              }`}
              onClick={() => handleClick("linkedin")}
            >
              LinkedIn
            </Button>
          </Link>
          <a href="mailto:contact@girmantech.com" className="no-underline">
            <Button
              variant="text"
              color="primary"
              className={`text-lg uppercase ${
                activeButton === "contact" ? "text-blue-500 underline" : ""
              }`}
              onClick={() => handleClick("contact")}
              target="_blank"
              href="mailto:contact@girmantech.com"
            >
              Contact
            </Button>
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed right-4 w-max p-4 bg-white flex flex-col items-center shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-6">
            <li>
              <Link
                to="/"
                className="no-underline"
                onClick={() => handleClick("search")}
              >
                <Button
                  variant="text"
                  color="primary"
                  className={`text-lg uppercase ${
                    activeButton === "search" ? "text-blue-500 underline" : ""
                  }`}
                >
                  Search
                </Button>
              </Link>
            </li>
            <li>
              <Link
                to="https://girmantech.com/"
                target="_blank"
                className="no-underline"
                onClick={() => handleClick("website")}
              >
                <Button
                  variant="text"
                  color="primary"
                  className={`text-lg uppercase ${
                    activeButton === "website" ? "text-blue-500 underline" : ""
                  }`}
                >
                  Website
                </Button>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/company/girmantech"
                target="_blank"
                className="no-underline"
                onClick={() => handleClick("linkedin")}
              >
                <Button
                  variant="text"
                  color="primary"
                  className={`text-lg uppercase ${
                    activeButton === "linkedin" ? "text-blue-500 underline" : ""
                  }`}
                >
                  LinkedIn
                </Button>
              </Link>
            </li>
            <li>
              <a
                href="mailto:contact@girmantech.com"
                className="no-underline"
                onClick={() => handleClick("contact")}
              >
                <Button
                  variant="text"
                  color="primary"
                  className={`text-lg uppercase ${
                    activeButton === "contact" ? "text-blue-500 underline" : ""
                  }`}
                >
                  Contact
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
