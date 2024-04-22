import React from "react";

const Experience = () => {
  return (
    <>
      <div className="h-1/2 xl:w-1/2 xl:h-full">
        <h3 className="xl:text-4xl font-bold mb-4">Full Stack Engineer</h3>
        <p className="xl:text-xl font-semibold mb-4">
          <img src="/nic.png" alt="" className="h-10 xl:h-20" />
          National Informatic Center (NIC), Raipur || Intern | Jan 2023 - Jun
          2023
        </p>
        <ul className="text-xs list-disc pl-5 xl:text-lg xl:space-y-6">
          <p>
            Full Stack Engineer and Team Leader during a six-month internship at
            the National Informatics Center(NIC), Raipur. Spearheaded the
            development of cross-platform native mobile applications,
            demonstrating expertise in both front-end and back-end technologies.
            Successfully delivered innovative solutions while fostering
            collaborative teamwork.
          </p>
          <li>
            Developed and maintained full-stack Native applications using
            React-Native, Node.js, and Firebase.
          </li>
          <li>
            Collaborated with cross-functional teams throughout the development
            lifecycle.
          </li>
          <li>
            Implemented responsive designs and optimized performance for various
            devices.
          </li>
          <li>
            Conducted code reviews and enforced best practices for writing
            clean, maintainable code.
          </li>
        </ul>
      </div>
      <div className="h-1/2 w-full xl:w-1/2 xl:h-full flex justify-center items-center bg-auto bg-no-repeat bg-center">
        <img src="/NIC_Certificate.jpg" alt="" className="w-[300px] h-auto xl:h-[700px] xl:w-auto rounded-lg shadow-lg transform hover:translate-x-[-10px] transition duration-300 ease-in-out" />
      </div>
    </>
  );
};

export default Experience;
