import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = "service_3f48roj";
    const templateID = "template_9gr2uia";

    window.emailjs
      .send(serviceID, templateID, {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then((response) => {
        console.log("Message sent successfully!", response.status, response.text);
        // Optionally reset form fields
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("Failed to send message. Error: ", err);
      });
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent text-[#e36414] mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects as I'm about to start my internship.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-[#e36414] mr-2' />
              <a href="mailto:imhengvisal168@gmail.com" className='hover:underline'>
                imhengvisal168@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-[#e36414] mr-2' />
              <span>+ (885) 89-898-237</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-[#e36414] mr-2' />
              <span>St 112, Toul Kork, Phnom Penh, Cambodia</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  type="text"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input
                  type="email"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className='bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-white 
  transform transition-transform duration-300 hover:scale-105 
  px-6 md:px-8 py-2 rounded-full text-sm md:text-base'
              >
                Send
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;