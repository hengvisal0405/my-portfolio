import React from "react";
import employeeMSImage from "../assets/image.png";
import bookMSImage from "../assets/admin-dashboard.png";
import ecomerceImage from "../assets/eimage.png";
import resumeImage from "../assets/resumeImage.png";
import jomnouyImage from "../assets/jomnouyImage.png";


const projects = [
  {
    id: 1,
    name: "E-comerce Website",
    technologies: "HTML CSS PHP MySQL",
    image: ecomerceImage,
    github: "https://github.com/hengvisal0405/E-commerce-Website",
  },
  {
    id: 2,
    name: "Resume Generator",
    technologies: "Flutter",
    image: resumeImage,
    github: "https://github.com/YouafKhan1",
    youtube: "https://www.youtube.com/watch?v=XyldnDmv1fc",
  },
  {
    id: 3,
    name: "Jomnouy Platform",
    technologies: "Node.Js React.Js Vite Tailwind CSS Laravel MySQL",
    image: jomnouyImage,
    github: "https://github.com/TechTheMoneyTeam/jomnouy",
  },
  {
    id: 4,
    name: "My Portfolio",
    technologies: "Node.Js React.Js Vite Tailwind CSS",
    image: employeeMSImage,
    github: "https://github.com/hengvisal0405/my-portfolio",
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
                rel="noopener noreferrer">GitHub
              </a>

              {project.name === 'Resume Generator' && (
                <a
                  href={project.youtube}
                  className="inline-block bg-red-600 text-white font-medium px-4 py-2 rounded-full ml-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              )}
            </div>
            
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
