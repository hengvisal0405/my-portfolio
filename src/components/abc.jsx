import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const About1 = () => {
               return (
                              <div className="bg-black text-white py-20" id="about">
                                             <div className="container mx-auto px-8 md:px-16 lg:px-24">
                                                            <h3 className="text-lg font-base text-gray-500 text-center">Skills</h3>
                                                            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                                                            <div className="flex flex-col md:flex-row items-center md:space-x-12">
                                                                           {/* <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          /> */}
                                                                           <div className="flex-1">
                                                                                          <p className="text-lg mb-8">
                                                                                                         I am a passionate web developer with a strong focus on frontend development.I enjoy on building
                                                                                                         modern and responsive web applications. With a strong foundation asdfasdfasdfzxcvzxcvzxcv
                                                                                                         in both frontend and backend technologies, I strive to create
                                                                                                         seamless and efficient user experiences.
                                                                                          </p>
                                                                                          <div className="space-y-4">
                                                                                                         <div className="flex items-center">
                                                                                                                        <label htmlFor="htmlandcss" className="w-2/12">
                                                                                                                                       HTML & CSS
                                                                                                                        </label>
                                                                                                                        <div className="grow bg-gray-800 rounded-full h-2.5">
                                                                                                                                       <div
                                                                                                                                                      className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-12/12"
                                                                                                                                       ></div>
                                                                                                                        </div>
                                                                                                         </div>
                                                                                                         <div className="flex items-center">
                                                                                                                        <label htmlFor="htmlandcss" className="w-2/12">
                                                                                                                                       React JS
                                                                                                                        </label>
                                                                                                                        <div className="grow bg-gray-800 rounded-full h-2.5">
                                                                                                                                       <div
                                                                                                                                                      className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                                                                                                                                       ></div>
                                                                                                                        </div>
                                                                                                         </div>
                                                                                                         <div className="flex items-center">
                                                                                                                        <label htmlFor="htmlandcss" className="w-2/12">
                                                                                                                                       Node JS
                                                                                                                        </label>
                                                                                                                        <div className="grow bg-gray-800 rounded-full h-2.5">
                                                                                                                                       <div
                                                                                                                                                      className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                                                                                                                                       ></div>
                                                                                                                        </div>
                                                                                                         </div>
                                                                                                         <div className="flex items-center">
                                                                                                                        <label htmlFor="htmlandcss" className="w-2/12">
                                                                                                                                       Laravel & PHP
                                                                                                                        </label>
                                                                                                                        <div className="grow bg-gray-800 rounded-full h-2.5">
                                                                                                                                       <div
                                                                                                                                                      className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                                                                                                                                       ></div>
                                                                                                                        </div>
                                                                                                         </div>
                                                                                                         <div className="flex items-center">
                                                                                                                        <label htmlFor="htmlandcss" className="w-2/12">
                                                                                                                                       Tailwind CSS
                                                                                                                        </label>
                                                                                                                        <div className="grow bg-gray-800 rounded-full h-2.5">
                                                                                                                                       <div
                                                                                                                                                      className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-12/12"
                                                                                                                                       ></div>
                                                                                                                        </div>
                                                                                                         </div>
                                                                                                         <div className="flex items-center">
                                                                                                                        <label htmlFor="htmlandcss" className="w-2/12">
                                                                                                                                       Git Hub
                                                                                                                        </label>
                                                                                                                        <div className="grow bg-gray-800 rounded-full h-2.5">
                                                                                                                                       <div
                                                                                                                                                      className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-12/12"
                                                                                                                                       ></div>
                                                                                                                        </div>
                                                                                                         </div>
                                                                                                         <div className="flex items-center">
                                                                                                                        <label htmlFor="htmlandcss" className="w-2/12">
                                                                                                                                       C C++ & Java
                                                                                                                        </label>
                                                                                                                        <div className="grow bg-gray-800 rounded-full h-2.5">
                                                                                                                                       <div
                                                                                                                                                      className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                                                                                                                                       ></div>
                                                                                                                        </div>
                                                                                                         </div>
                                                                                                         <div className="flex items-center">
                                                                                                                        <label htmlFor="htmlandcss" className="w-2/12">
                                                                                                                                       UX/Ui Design
                                                                                                                        </label>
                                                                                                                        <div className="grow bg-gray-800 rounded-full h-2.5">
                                                                                                                                       <div
                                                                                                                                                      className="bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                                                                                                                                       ></div>
                                                                                                                        </div>
                                                                                                         </div>
                                                                                          </div>
                                                                                          <div className="mt-12 flex justify-center space-x-12 text-center">
                                                                                                         <div>
                                                                                                                        <h3 className="text-2xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] to-blue-500">
                                                                                                                                       1+
                                                                                                                        </h3>
                                                                                                                        <p className="font-semibold">Years Experience</p>
                                                                                                         </div>
                                                                                                         <div>
                                                                                                                        <h3 className="text-2xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] to-blue-500">
                                                                                                                                       3+
                                                                                                                        </h3>
                                                                                                                        <p className="font-semibold">Projects Completed</p>
                                                                                                         </div>
                                                                                          </div>

                                                                           </div>
                                                            </div>
                                             </div>
                              </div>
               );
};

export default About1;
