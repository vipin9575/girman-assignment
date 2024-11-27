import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import companyLogo from "../assets/girman-logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("search");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-white shadow-md  sticky top-0">
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
        <div className="flex space-x-2">
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
            >
              Contact
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
