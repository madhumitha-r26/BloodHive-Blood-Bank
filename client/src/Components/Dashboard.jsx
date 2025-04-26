import React, { useState, useEffect } from "react";
import logo from "./imgs/logo.png";
import "./Navbar.css";
import Footer from "./Footer";
import Logout from "./Logout";

function Dashboard() {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("-SELECT-"); // <-- Important change!
  
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setDonors(data); // or setDonors(data.users) if backend returns { users: [...] }
        setFilteredDonors(data);
      })
      .catch((error) => console.error("Error fetching donors:", error));
  }, []);
  
  const handleBloodGroupChange = (e) => {
    const selectedGroup = e.target.value;
    setSelectedBloodGroup(selectedGroup);
  
    if (selectedGroup === "-SELECT-") {
      setFilteredDonors(donors);
    } else {
      const filtered = donors.filter(
        (donor) =>
          donor.blood_group.toLowerCase().trim() ===
          selectedGroup.toLowerCase().trim()
      );
      setFilteredDonors(filtered);
    }
  };
  
  const bloodGroups = [
    "-SELECT-",
    "O +ve",
    "O -ve",
    "A +ve",
    "A -ve",
    "B +ve",
    "B -ve",
    "AB +ve",
    "AB -ve",
  ];

  return (
    <div>
      <nav className="navbar bg-red-600 p-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex-1">
          <a href="/" className="flex">
            <img src={logo} className="w-10 h-10" alt="Blood Hive Logo" />
            <h5 className="text-xl font-semibold text-white">Blood Hive</h5>
          </a>
        </div>
        <Logout />
        <div></div>
      </nav>
      <div className="pt-20">
        <div className="p-5 flex gap-2 mt-3">
          <label className="text-xl">Select Blood Group</label>
          <select
            value={selectedBloodGroup}
            onChange={handleBloodGroupChange}
            className="py-3 px-4 block w-48 h-full border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none select"
            required
          >
            {bloodGroups.map((group, index) => (
              <option key={index} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <div className="p-5 mt-3">
          <h3 className="text-center text-2xl font-semibold text-red-700">
            DONOR'S DETAILS
          </h3>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Blood Group</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {console.log("Filtered Donors Before Rendering:", filteredDonors)} {/* Debugging */}
                {filteredDonors.map((donor, index) => (
                  <tr key={index}>
                    <td>{donor.name}</td>
                    <td>{new Date(donor.dob).toLocaleDateString()}</td>
                    <td>{donor.gender}</td>
                    <td>{donor.blood_group}</td>
                    <td>{donor.email}</td>
                    <td>{donor.phone}</td>
                    <td>{donor.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;