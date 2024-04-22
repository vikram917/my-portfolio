"use client";

import { API_KEY } from "@/utils/constants";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
require('dotenv').config();

const KEY_API = process.env.KEY_API;

const ContactForm = () => {
  
  const [result, setResult] = useState("");
   const onSubmit = async (event) => {
    
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    },[result]);

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row md:space-x-4 xl:justify-evenly p-10">
      <div className="w-full md:w-1/2 border border-slate-400 p-4 md:p-6 rounded-lg flex flex-col ">
      <h1 className="text-center text-xl md:text-4xl md:mb-8">Get in touch !</h1>
        <form onSubmit={onSubmit} className="p-10">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full text-black px-4 md:py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
          <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full text-black px-4 md:py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
          <input
              type="number"
              id="number"
              name="number"
              placeholder="Number"
              className="w-full text-black px-4 md:py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Type Here...."
              className="w-full text-black px-4 md:py-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="w-full md:mt-16 flex item-center justify-center">
          <button
            type="submit"
            className="md:w-60 md:text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          </div>
          
        </form>
        <span className="text-green-600 text-center">{result}</span>
      </div>
      <div className="w-full h-full md:w-1/2 xl:w-full md:h-full flex flex-col items-center justify-evenly md:justify-center overflow-hidden">
      <div className="h-1/2 w-full overflow-hidden rounded-lg text-gray-400 md:space-y-4">
          <iframe
            src="https://maps.google.com/maps?q=21.235908,81.6020567&z=13&output=embed"
            className="w-full h-full"
            title="Google Map"
          ></iframe>
        </div>
        <div className="md:h-1/2 w-full flex flex-col text-gray-400 space-y-2 md:space-y-6">
          <h2 className="text-xl md:text-3xl font-bold md:mb-4">Contact Information</h2>
          <div className="flex flex-col md:space-y-4">
            <p>492013, Dagniya, Raipur, Chhattisgarh, India.</p>
            <p>Monday-Friday 11:00 am-5:00 pm</p>
            <p>
              <span className="font-bold">Call Me:</span>+91-9406061917
            </p>
            <div className="text-gray-400 flex flex-col space-y-2 md:space-y-4">
              <h1 className="text-xl md:text-3xl font-bold md:mb-4">Follow Me</h1>
              <div className="space-x-2 md:space-x-4 lg:space-x-10 xl:space-x-16">
                <a href="https://github.com/vikram917">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-6 md:h-10 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
                  />
                </a>

                <a href="https://www.instagram.com/_hollow068/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="h-6 md:h-10 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
                  />
                </a>
                <a href="https://www.linkedin.com/in/vikrambaghel917/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-6 md:h-10 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
                  />
                </a>
                <a href="https://twitter.com/Vikramb28256747">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="h-6 md:h-10 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
