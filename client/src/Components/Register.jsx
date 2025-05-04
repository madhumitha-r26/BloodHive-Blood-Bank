import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Register.css"; // Import the custom CSS file

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    blood_group: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Donor registered successfully!");
        setFormData({
          name: "",
          dob: "",
          gender: "",
          blood_group: "",
          email: "",
          phone: "",
          address: "",
        });
      } else {
        alert(result.message || "Failed to register donor.");
      }
    } catch (error) {
      console.error("Error registering donor:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="mt-12">
      <Navbar />
      <h5 className="pt-10 text-center text-xl text-red-600 font-semibold">
        <u>DONOR REGISTRATION FORM</u>
      </h5>
      <form
        className="flex justify-center items-center pt-5"
        onSubmit={handleSubmit}
      >
        <div className="artboard phone-1 space-y-4 m-8 w-full">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="py-3 px-4 block w-full mt-3 border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            required
          />
          <label>Date of Birth:</label>
          <div className="relative">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="py-3 px-4 block w-full mt-3 border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none date-input"
              required
            />
          </div>
          <label>Gender:</label> <br />
          <div className="flex gap-2 mt-3" required>
            <div className="flex gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="radio radio-error"
              />{" "}
              Male
            </div>
            <div className="flex gap-2">
              {" "}
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="radio radio-error"
              />{" "}
              Female
            </div>
          </div>
          <label>Blood Group:</label>
          <select
            name="blood_group"
            value={formData.blood_group}
            onChange={handleChange}
            className="py-3 px-4 block w-full h-full mt-3 border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none select"
            required
          >
            <option disabled={true} value="">
              -SELECT-
            </option>
            <option>O+ve</option>
            <option>O-ve</option>
            <option>A+ve</option>
            <option>A-ve</option>
            <option>B+ve</option>
            <option>B-ve</option>
            <option>AB+ve</option>
            <option>AB-ve</option>
          </select>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@gmail.com"
            className="py-3 px-4 block w-full mt-3 border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            required
          />
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="123-456-789"
            className="py-3 px-4 block w-full mt-3 border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            required
          />
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Madurai, Tamil Nadu, India"
            className="py-3 px-4 block w-full h-32 mt-3 border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            required
          ></textarea>
          <button
            type="submit"
            className="btn bg-red-700 text-white border-transparent w-full hover:bg-red-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default Register;