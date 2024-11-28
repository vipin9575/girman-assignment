import company_logo_text from "../assets/girman-logo-text.svg";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import a search icon from react-icons
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate("/results", { state: { searchTerm } });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-100 to-blue-200 h-screen">
      <div className="max-w-lg transform -translate-y-1/2">
        <img src={company_logo_text} alt="logo-text" className="h-14 mb-4 sm:h-20" />
        <div className="w-full p-4 relative">
          <Input
            placeholder="Search"
            className="w-full pl-10 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <FiSearch className="absolute top-1/2 left-[1.75rem] transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Home;
