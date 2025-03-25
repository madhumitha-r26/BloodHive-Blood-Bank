import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Register.css"; // Import the custom CSS file

function Register() {
  return (
    <div className="mt-12">
      <Navbar />
      <h5 className="pt-10 text-center text-xl text-red-600 font-semibold">
        <u>DONOR REGISTRATION FORM</u>
      </h5>
      <form className="flex justify-center items-center pt-5">
        <div className="artboard phone-1 space-y-4 m-8 max-w-xs">
          <label>Name:</label>
          <input
            type="text"
            name="username"
            placeholder="John Doe"
            className="input input-bordered border-red-300 border-2 bg-red-50 focus:outline-none w-full"
            required
          />
          <label>Date of Birth:</label>
          <div className="relative">
            <input
              type="date"
              name="dob"
              className="input input-bordered border-red-300 border-2 bg-red-50 focus:outline-none w-full date-input"
              required
            />
            <span className="calendar-icon">
              <i className="fas fa-calendar-alt"></i>
            </span>
          </div>
          <label>Gender:</label> <br />
          <div className="flex gap-2" required>
            <div className="flex gap-2">
              <input
                type="radio"
                name="radio-1"
                className="radio radio-error"
              />{" "}
              Male
            </div>
            <div className="flex gap-2">
              {" "}
              <input
                type="radio"
                name="radio-1"
                className="radio radio-error"
              />{" "}
              Female
            </div>
          </div>
          <label>Blood Group:</label>
          <select
            defaultValue="-SELECT-"
            className="select select-bordered border-red-300 border-2 bg-red-50 focus:outline-none w-full"
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
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            className="input input-bordered border-red-300 border-2 bg-red-50 focus:outline-none w-full"
            required
          />
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="123-456-789"
            className="input input-bordered border-red-300 border-2 bg-red-50 focus:outline-none w-full"
            required
          />
          <label>Address:</label>
          <textarea
            placeholder="Madurai, Tamil Nadu, India"
            className="textarea textarea-bordered border-red-300 border-2 bg-red-50 focus:outline-none w-full"
            required
          ></textarea>
          <button className="btn bg-red-700 text-white border-transparent w-full hover:bg-red-600 focus:outline-none">
            Submit
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default Register;