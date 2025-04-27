import React, { useState } from "react";
import { Send } from "@mui/icons-material";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "8ff188d2-6250-4871-82e3-dd793aabbb5b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <section id="contact" className="bg-transparent p-4 mt-0 pt-20">
        <h2 className="text-center text-3xl text-red-700 uppercase font-semibold">
          Feel Free to Contact us
        </h2>

        <form
          onSubmit={onSubmit}
          className="flex flex-wrap items-center justify-center m-5"
        >
          <input
            type="text"
            name="name"
            className="py-3 px-4 block w-full mt-5 border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter Name"
            required
          />
          <input
            type="email"
            name="email"
            className="py-3 px-4 block w-full mt-5 border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter Email"
            required
          />
          <input
            type="tel"
            name="phone"
            className="py-3 px-4 block w-full mt-5 border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter Phone"
            required
          />
          <textarea
            name="message"
            className="py-3 px-4 block w-full h-60 mt-5 border-gray-200 bg-neutral-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn my-5 w-full h-auto border-transparent shadow-none text-white bg-red-600 border-white hover:border-white active:border-white p-2"
          >
            <Send /> Send
          </button>
        </form>
        <span className="text-center block mt-3 text-red-600">{result}</span>

        <div className="flex justify-between mx-5 flex-wrap-reverse md">
          <div className="mt-2">
            <div className="flex">
              <PlaceIcon className="text-red-700" />
              <p className="text-red-600 font-medium">
                &nbsp; Madurai, Tamil Nadu, India
              </p>
            </div>
            <div className="flex">
              <EmailIcon className="text-red-700" />
              <p className="text-red-600 font-medium">
                &nbsp; bloodhive.official@yahoo.com
              </p>
            </div>
            <div className="flex">
              <LocalPhoneIcon className="text-red-700" />
              <p className="text-red-600 font-medium">&nbsp; 123-456-890</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;