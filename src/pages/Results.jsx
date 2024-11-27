import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import profilePic from "../assets/ProfilePic.jpg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import notFound from "../assets/no-result.svg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import FetchDetailedDialog from "../components/FetchDetailedDialog";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm } = location.state;
  const [filteredData, setFilteredData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Data/db.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        const filteredResults = data.filter(
          (user) =>
            user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleOpenDialog = (user) => {
    setSelectedUser(user); // Set the selected user details
  };

  const handleCloseDialog = () => {
    setSelectedUser(null); // Close the dialog by clearing the selected user
  };

  return (
    <div className="p-8 flex flex-col items-center bg-gradient-to-b from-white via-blue-100 to-blue-200 min-h-screen">
      <div className="flex items-center gap-4 justify-center mb-6">
        <IoArrowBackCircleOutline
          className="h-8 w-8"
          onClick={() => navigate("/")}
        />
        <h1 className="text-3xl font-semibold">Search Results</h1>
      </div>

      {/* Card Grid */}
      <div
        className={`grid grid-cols-1 gap-6 ${
          filteredData.length === 2
            ? "grid-cols-2"
            : filteredData.length >= 3
            ? "md:grid-cols-2 lg:grid-cols-3"
            : ""
        }`}
      >
        {filteredData.length > 0 ? (
          filteredData.map((user, index) => (
            <Card
              key={index}
              className="bg-white max-w-md shadow-lg rounded-lg p-4 w-[350px]"
            >
              <CardHeader>
                <img
                  src={profilePic}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="h-20 w-20 rounded-full object-cover border p-[5px]"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-3xl font-semibold">{`${user.first_name} ${user.last_name}`}</CardTitle>
                <div className="flex items-center text-gray-600 text-sm space-x-2 mt-1">
                  <FaMapMarkerAlt className="h-4 w-4" />
                  <p>{user.city}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <FaPhoneAlt className="h-4 w-4" color="gray" />
                    <p>{user.contact_number}</p>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">
                    Available on phone
                  </p>
                </div>
                <Button onClick={() => handleOpenDialog(user)}>
                  Fetch Details
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div>
            <img src={notFound} alt="not found" />
          </div>
        )}
      </div>
      <FetchDetailedDialog user={selectedUser} onClose={handleCloseDialog} />
    </div>
  );
};

export default Results;
