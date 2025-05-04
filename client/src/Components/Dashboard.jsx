import React, { useState, useEffect } from "react";
import logo from "./imgs/logo.png";
import "./Navbar.css";
import Footer from "./Footer";
import Logout from "./Logout";
import DeleteIcon from "@mui/icons-material/Delete";

function Dashboard() {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("-SELECT-");

  const fetchDonors = (group) => {
    const url =
      group && group !== "-SELECT-"
        ? `https://blood-hive-blood-bank-server-1v3qd84fj.vercel.app/api/donors?blood_group=${encodeURIComponent(
            group
          )}`
        : "https://blood-hive-blood-bank-server-1v3qd84fj.vercel.app/api/donors";

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch donors");
        return response.json();
      })
      .then((data) => {
        setFilteredDonors(data);
      })
      .catch((error) => console.error("Error fetching donors:", error));
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  const handleBloodGroupChange = (e) => {
    const selectedGroup = e.target.value;
    setSelectedBloodGroup(selectedGroup);
    fetchDonors(selectedGroup);
  };

  const bloodGroups = [
    "-SELECT-",
    "O+ve",
    "O-ve",
    "A+ve",
    "A-ve",
    "B+ve",
    "B-ve",
    "AB+ve",
    "AB-ve",
  ];

  const handleDeleteDonor = (id) => {
    if (window.confirm("Are you sure you want to delete this donor?")) {
      fetch(`http://localhost:5000/api/donors/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete donor");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.message); // Log success message
          setFilteredDonors(filteredDonors.filter((donor) => donor._id !== id)); // Update the UI
        })
        .catch((error) => console.error("Error deleting donor:", error));
    }
  };

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
      </nav>

      <div className="pt-20">
        <div className="p-5 flex gap-2 mt-3">
          <label className="text-xl">Select Blood Group</label>
          <select
            value={selectedBloodGroup}
            onChange={handleBloodGroupChange}
            className="py-3 px-4 block w-48 h-full border-gray-200 bg-neutral-300 rounded-lg text-sm"
          >
            {bloodGroups.map((group, index) => (
              <option key={index} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-5 mt-3">
          <h3 className="text-center text-2xl font-semibold text-red-700">
            DONOR'S DETAILS
          </h3>
          <div className="overflow-x-auto">
            <table className="table m-5">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Blood Group</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Delete Donor</th>
                </tr>
              </thead>
              <tbody>
                {filteredDonors.length > 0 ? (
                  filteredDonors.map((donor) => (
                    <tr key={donor._id}>
                      <td>{donor.name}</td>
                      <td>{new Date(donor.dob).toLocaleDateString()}</td>
                      <td>{donor.gender}</td>
                      <td>{donor.blood_group}</td>
                      <td>{donor.email}</td>
                      <td>{donor.phone}</td>
                      <td>{donor.address}</td>
                      <td>
                        <button
                          className="btn bg-red-700 text-white border-transparent shadow-none mt-4"
                          onClick={() => handleDeleteDonor(donor._id)} // Pass donor ID to the handler
                        >
                          <DeleteIcon /> Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No donors found.
                    </td>
                  </tr>
                )}
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
