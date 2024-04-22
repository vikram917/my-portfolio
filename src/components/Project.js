import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const TechStack = ({ technologies }) => (
  <div className="tech-stack">
    <h4 className="text-sm font-bold xl:mb-2">Tech Stack:</h4>
    <div className="flex flex-wrap">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-800 py-1 px-2 mr-2 xl:mb-2 rounded-full text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Project = ({ title, description, imageUrl, technologies, liveUrl, githubUrl }) => (
  <div className="project border border-slate-600 p-2 rounded-lg ml-4 mt-4 transform hover:translate-x-[-5px] transition duration-300 ease-in-out">
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover xl:mb-4 rounded-lg" />
    <h3 className="text-sm xl:text-xl font-bold xl:mb-2">{title}</h3>
    <p className="text-xs xl:mb-4 text-wrap">{description}</p>
    <TechStack technologies={technologies} />
    <div className="mt-4 flex justify-evenly items-center">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r text-xs from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center"
      >
        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
        Live Demo
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="h-6 xl:h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gray-700 text-white  rounded-lg flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faGithub} className="h-6 xl:h-10" />
       
      </a>
    </div>
  </div>
);

export default Project;