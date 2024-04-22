import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row h-full text-sm">
      <div className="flex flex-row justify-center items-center w-full md:w-2/5 md:h-full">
        <div className=" flex flex-col items-center text-base text-slate-300 font-semibold space-y-2 md:space-y-20">
          <div className="flex w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <img
              src="/mypic.png"
              alt=""
              className="transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
            />
          </div>
          <div className=" space-x-4 md:space-x-20 text-gray-600">
            <a href="https://github.com/vikram917">
              <FontAwesomeIcon
                icon={faGithub}
                className=" w-6 h-10 md:w-10 md:h-10 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
            </a>

            <a href="https://www.instagram.com/_hollow068/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-10 md:w-10 md:h-10  transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
            </a>
            <a href="https://www.linkedin.com/in/vikrambaghel917/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-6 h-10 md:w-10 md:h-10  transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
            </a>
            <a href="https://twitter.com/Vikramb28256747">
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-6 h-10 md:w-10 md:h-10  transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
            </a>
          </div>
          <p className="text-sm md:text-xl">
            Quick learner and dedicated full-stack developer with a strong
            commitment to building exceptional web applications. With a diverse
            skill set and a deep understanding of both front-end and back-end
            technologies, I take pride in my ability to craft user-friendly,
            scalable, and efficient digital solutions.
          </p>
        </div>
      </div>
      <div className=" w-full md:w-3/5 md:h-full text-slate-300">
        <div>
          <h3 className="text-lg md:text-4xl font-bold mb-2 mt-2 md:mb-4">Qualifications</h3>
          <hr />
          <div className="md:space-y-8 md:mt-4">
            <div className="flex flex-col items-center md:flex-row md:flex md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="">
                <div className="flex space-x-6 items-center">
                  <h4 className="md:text-xl font-bold">
                    M.Sc. in Information Technology
                  </h4>
                  <p>CGPA - 7.04</p>
                  <p>2022-2023 </p>
                </div>
                <div>
                  <p>Govt. Nagarjuna P.G. College, Raipur</p>
                </div>
              </div>
            
              <p className="w-20 text-center text-xs md:font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full md:p-2">
                Completed
              </p>
              
              
            </div>
            <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <div>
                <div className="flex space-x-6 items-center">
                  <h4 className="md:text-xl font-bold">
                  Bacholer in Computer Application
                  </h4>
                  <p>Percentage - 71.80%</p>
                <p>2019-2021</p>
                </div>
                <div>
                  <p>Govt. Nagarjuna P.G. College, Raipur</p>
                </div>
              </div>
              <p className="w-20 text-center text-xs md:font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full md:p-2">
                Completed
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <div>
                <div className="flex space-x-6 items-center">
                <h4 className="md:text-xl font-bold">
                  Diploma in Computer Application
                </h4>
                <p>Percentage - 69.25%</p>
                <p>2018</p>
                </div>
                <div>
                  <p>Govt. Nagarjuna P.G. College, Raipur</p>
                </div>
              </div>
              <p className="w-20 text-center text-xs md:font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full md:p-2">
                Completed
              </p>
            </div>
          </div>
        </div>
        <div className="md:space-y-6">
          <h1 className="text-lg md:text-4xl font-bold mb-2 mt-2 md:mb-4 md:mt-8">Skill's</h1>
          <hr />
          <div className="flex flex-col">
            <div className="flex justify-evenly flex-wrap items-center ">
              <img
                src="/mongodb.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
              <img
                src="/express.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out "
              />
              <img
                src="/ract.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
              <img
                src="/reactnative.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-wrap justify-evenly items-center ">
              <img
                src="/html.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
              <img
                src="/css.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
              <img
                src="/js.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
              <img
                src="/ts.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
              <img
                src="/mysql.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
              <img
                src="/firebase.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
              <img
                src="/python.png"
                alt=""
                className="h-10 md:h-20 transform hover:translate-x-[-5px] transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
