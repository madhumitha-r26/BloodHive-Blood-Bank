import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import doctor from "./imgs/doctor.png";
import donors from "./imgs/donors.png";

import { NavLink } from "react-router-dom";
import Contact from "./Contact"

function Home() {
  return (
    <div>
      <Navbar />

      <div className="pt-12"> 
        <section id="home" className="pt-4 mt-4 flex items-center justify-center p-4 mt-0 pt-20">
          <div className="max-w-md mx-auto overflow-hidden gap-4 md:max-w-3xl">
            <div className="md:flex">
              <div className="flex items-center justify-center md:shrink-0">
                <div className="text-center">
                  <h1 className="text-5xl uppercase m-4 text-red-600 font-medium">
                    Blood Hive
                  </h1>
                  <p className="text-xl italic text-wrap text-red-500">
                    "Ensuring timely, safe, and efficient blood transfusions for all."
                  </p>
                 
            
                  <NavLink to={"/register"} className="btn bg-red-700 text-white border-transparent shadow-none mt-4">  Register for Donation </NavLink>
      

                </div>
              </div>
              <div>
                <img
                  className="h-full w-full md:h-full md:w-full"
                  src={doctor}
                  alt="welcome pic"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="bg-red-600 text-white p-4 mt-0 pt-20">
          <div className="flex w-full flex-col lg:flex-row p-4">
            <div className="card bg-transparent rounded-box grid h-full w-full grow place-items-center m-4">
              <img src={donors} className="h-full w-full" />
            </div>

            <div className="card bg-transparent rounded-box grid h-full grow p-8 ">
              <h2 className="text-right text-3xl uppercase font-semibold">
                Our Mission
              </h2>
              <p className="text-justify text-xl pt-2">
                At the Blood Hive, our mission is to ensure timely and safe blood transfusions for patients in need through efficient management of blood donations, storage, and distribution. We are committed to maintaining the highest standards of safety, efficiency, and transparency in blood donation and management. Our platform features an intuitive user interface for donors and recipients, rigorous blood testing protocols, real-time tracking of blood units, and analytical tools to aid in decision-making.
              </p>
            </div>
          </div>
        </section>

            <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default Home;