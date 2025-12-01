import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import portfolio from "../../assets/image/1701064092198-removebg-preview.png";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm uppercase tracking-wider">
                  Software Engineer
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="block text-gray-900 dark:text-white">Epshita</span>
                <span className="block text-gray-700 dark:text-gray-300">Shima</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed">
                Crafting elegant solutions through code. Passionate about building scalable applications and creating exceptional user experiences.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center group">
                <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 mr-4">
                  <FontAwesomeIcon 
                    icon={faPhone} 
                    className="text-gray-600 dark:text-gray-400 text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    +880 1793651031
                  </p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 mr-4">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="text-gray-600 dark:text-gray-400 text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors break-all">
                    epshitashima@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-lg transition-all duration-300 mr-4">
                  <FontAwesomeIcon 
                    icon={faMapMarkerAlt} 
                    className="text-gray-600 dark:text-gray-400 text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    Mirpur-2, Dhaka-1216
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/epshita-shima" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <FontAwesomeIcon 
                    icon={faGithub} 
                    className="text-gray-700 dark:text-gray-300 text-2xl group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>

              <a 
                href="https://linkedin.com/in/epshita-shima" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <FontAwesomeIcon 
                    icon={faLinkedin} 
                    className="text-gray-700 dark:text-gray-300 text-2xl group-hover:text-blue-600 transition-colors"
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>

              <a 
                href="https://facebook.com/epshita.shima" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <FontAwesomeIcon 
                    icon={faFacebook} 
                    className="text-gray-700 dark:text-gray-300 text-2xl group-hover:text-blue-500 transition-colors"
                  />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Facebook
                </span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Frame around image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="absolute -inset-2 bg-gradient-to-tr from-gray-200 to-gray-50 dark:from-gray-600 dark:to-gray-700 rounded-3xl transform -rotate-3 opacity-30"></div>
              
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={portfolio} 
                  alt="Epshita Shima" 
                  className="w-full max-w-lg object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;