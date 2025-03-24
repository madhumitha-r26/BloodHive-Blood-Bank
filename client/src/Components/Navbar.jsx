import React, { useState, useEffect } from "react";
import logo from "./imgs/logo.png";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar bg-red-600 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex-1">
        <a href="/" className="flex">
        <img src={logo} className="w-10 h-10"  /> <h5 className="text-xl font-semibold text-white">Blood Hive</h5> 
        </a>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-xl"
        >
          {isMenuOpen ? (
            <CloseOutlinedIcon className="text-white" />
          ) : (
            <MenuOutlinedIcon className="text-white" />
          )}
        </button>
      </div>

      <div
        className={`absolute w-full md:relative top-16 right-0 md:top-0 md:right-0 bg-red-600 md:bg-transparent shadow-md md:shadow-none md:w-auto p-4 md:p-0 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden md:block"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-4 text-base text-white text-right">
          <li className="pt-2 md:mt-0">
            <a
              className={`hover:underline cursor-pointer ${
                activeSection === "home" ? "font-bold" : ""
              }`}
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="pt-2 md:mt-0">
            <a
              className={`hover:underline cursor-pointer ${
                activeSection === "mission" ? "font-bold" : ""
              }`}
              href="#mission"
            >
              Mission
            </a>
          </li>
          <li className="pt-2 md:mt-0">
            <a
              className={`hover:underline cursor-pointer ${
                activeSection === "contact" ? "font-bold" : ""
              }`}
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li>
            <button
              className="btn bg-transparent btn-outline cursor-pointer hover:border-white shadow-none"
              onClick={()=>document.getElementById('my_modal_3').showModal()}
            >
              Admin Login
            </button>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-red-500 p-4">
    <form method="dialog">
      <button className="btn btn-sm border-transparent shadow-none bg-transparent absolute right-2 top-2"> <CloseOutlinedIcon/> </button>
    </form>
    <h5 className="pt-10 text-center text-xl font-semibold">ADMIN LOGIN</h5>
    <form className="flex justify-center items-center pt-5">
          <div className="artboard phone-1 space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="input input-bordered w-full bg-red-50 focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="input input-bordered w-full bg-red-50 focus:outline-none"
              required
            />
            <button className="btn bg-red-700 text-white border-transparent w-full hover:bg-red-600 focus:outline-none">
              Login
            </button>
          </div>
        </form>
  
  </div>
</dialog>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
