import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import doctor from "./imgs/doctor.png";
import donors from "./imgs/donors.png";
import { Send } from "@mui/icons-material";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="pt-16"> {/* Add padding to the top */}
        <section id="home" className="pt-4 mt-4 flex items-center justify-center">
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
                  <button className="btn bg-red-700 text-white border-transparent shadow-none mt-4">
                    Register for Donation
                  </button>
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

        <section id="mission" className="bg-red-600 text-white p-4 mt-0">
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

        <section id="contact" className="bg-transparent p-4 mt-0 pt-16"> {/* Add padding to the top */}
          <h2 className="text-center text-3xl text-red-700 uppercase font-semibold">
            Feel Free to Contact us
          </h2>

          <form
            action="mailto:bloodhive.official@yahoo.com"
            className="flex flex-wrap items-center justify-center m-5"
          >
            <input
              type="text"
              className="py-3 px-4 block w-full mt-5 border-gray-200 bg-neutral-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter Name"
            />
            <input
              type="text"
              className="py-3 px-4 block w-full mt-5 border-gray-200 bg-neutral-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter Email"
            />
            <input
              type="text"
              className="py-3 px-4 block w-full mt-5 border-gray-200 bg-neutral-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter Phone"
            />
            <textarea
              className="py-3 px-4 block w-full h-60 mt-5 border-gray-200 bg-neutral-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter Message"
            />
          </form>

          <div className="flex justify-between mx-5 flex-wrap-reverse md">
            <div className=" mt-2">
              <div className="flex">
                <PlaceIcon className="text-red-700" />
                <p className="text-red-600 font-medium">&nbsp; Madurai, Tamil Nadu, India</p>
              </div>
              <div className="flex">
                <EmailIcon className="text-red-700" />
                <p className="text-red-600 font-medium">&nbsp; bloodhive.official@yahoo.com</p>
              </div>
              <div className="flex">
                <LocalPhoneIcon className="text-red-700" />
                <p className="text-red-600 font-medium">&nbsp; 123-456-890</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn my-5 w-full h-auto shadow-none text-white bg-red-600 border-white hover:border-white active:border-white p-2"
              >
                <Send /> Send
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;