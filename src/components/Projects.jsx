import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "E-comerce Website",
    technologies: "HTML CSS PHP MySQL",
    image: employeeMSImage,
    github: "https://github.com/hengvisal0405/E-commerce-Website",
  },
  {
    id: 2,
    name: "Resume Generator",
    technologies: "Flutter",
    image: bookMSImage,
    github: "https://github.com/YouafKhan1",
  },
  {
    id: 3,
    name: "Jomnouy Platform",
    technologies: "Node.Js React.Js Vite Tailwind CSS Laravel MySQL",
    image: employeeMSImage,
    github: "https://github.com/TechTheMoneyTeam/jomnouy",
  },
  {
    id: 4,
    name: "My Portfolio",
    technologies: "Node.Js React.Js Vite Tailwind CSS",
    image: employeeMSImage,
    github: "https://github.com/TechTheMoneyTeam/jomnouy",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r from-[#fc4a1a] to-[#f7b733]  text-black font-medium px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
