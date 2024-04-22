"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import useTypingEffect from "./hooks/useTypingEffect";
import { professionText, developerText, typingSpeed } from "../utils/constants";

const Hero = () => {
  const typedDeveloperText = useTypingEffect(developerText, typingSpeed);
  const typedProfessionText = useTypingEffect(professionText, typingSpeed);

  return (
    <>
      <div className="h-1/2 xl:w-1/2 xl:h-full">
        <div className="w-full h-full space-y-4  flex flex-col justify-center xl:flex-col md:justify-evenly xl:justify-evenly items-center p-2">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-40 md:w-60 xl:w-64 rounded-full p-2">
            <h1 className="text-xs md:text-lg xl:text-xl">
              Welcome to My Portfolio
            </h1>
          </div>
          <div className=" w-auto xl:space-y-4">
            <h1 className="text-md md:text-xl lg:text-4xl  xl:text-4xl font-semibold">
              Hi,
            </h1>
            <h1 className="text-md md:text-2xl lg:text-4xl  xl:text-4xl font-semibold">
              I am <span>{typedDeveloperText}</span>
            </h1>
            <h1 className="text-md md:text-2xl lg:text-4xl xl:text-6xl font-bold">
              I am <span>{typedProfessionText}</span>
            </h1>
            <p className="text-xs md:text-xl lg:text-2xl xl:text-xl">
              with a passion for creating innovative web applications. I have
              expertise in designing, developing, and deploying robust,
              user-friendly, and scalable solutions by leveraging a diverse tech
              stack.Explore my work and learn more about my skills and
              experience.
            </p>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full lg:w-60 w-40 flex justify-center p-2">
            <button>
              <a href={"/CV.pdf"} download="Vikram_Baghel.pdf">
                <h1 className="text-xs md:text-xl lg:text-2xl xl:text-2xl font-semibold">
                  Download CV
                </h1>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="h-1/2 space-y-4 xl:w-1/2 xl:h-full flex flex-col justify-evenly items-center">
        <div className="flex lg:w-96 lg:h-96 xl:w--3/6 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-slideRight">
          <img
            src="/mypic.png"
            alt=""
            className="w-40 h-40 md:w-80 md:h-80 lg:w-full lg:h-full xl:w-full xl:h-full object-cover transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
          />
        </div>
        <div className="space-x-8 xl:space-x-20 text-gray-600 animate-slideRight">
          <a href="https://github.com/vikram917">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-6 h-6 md:w-8 md:h-8 lg:h-10 lg:w-10 xl:h-10 xl:w-10 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
            />
          </a>

          <a href="https://www.instagram.com/_hollow068/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-6 md:w-8 md:h-8 lg:h-10 lg:w-10 xl:h-10 xl:w-10 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
            />
          </a>
          <a href="https://www.linkedin.com/in/vikrambaghel917/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-6 h-6 md:w-8 md:h-8 lg:h-10 lg:w-10 xl:h-10 xl:w-10 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
            />
          </a>
          <a href="https://twitter.com/Vikramb28256747">
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-6 h-6 md:w-8 md:h-8 lg:h-10 lg:w-10 xl:h-10 xl:w-10 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
