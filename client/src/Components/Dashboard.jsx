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
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
