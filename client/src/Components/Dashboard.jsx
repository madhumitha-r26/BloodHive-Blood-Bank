import React from "react";
import logo from "./imgs/logo.png";
import "./Navbar.css";
import Footer from "./Footer";
import Logout from "./Logout";

function Dashboard() {
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
          defaultValue={"-SELECT-"}
            className="py-3 px-4 block w-48 h-full border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none select"
            required
          >
            <option disabled={true}>-SELECT-</option>
            <option>O '+ve'</option>
            <option>O '-ve'</option>
            <option>A '+ve'</option>
            <option>A '-ve'</option>
            <option>B '+ve'</option>
            <option>B '-ve'</option>
            <option>AB '+ve'</option>
            <option>AB '-ve'</option>
          </select>
      </div>

<div className="p-5 mt-3">
  <h3 className="text-center text-2xl font-semibold text-red-700">DONOR'S DETAILS</h3>
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
   <tr>
    <td>Madhu</td>
    <td>26/03/2002</td>
    <td>Female</td>
    <td>O '+ve'</td>
    <td>madhu@gmail.com</td>
    <td>1234567890</td>
    <td>Madurai, Tamil Nadu, India</td>
   </tr>
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
