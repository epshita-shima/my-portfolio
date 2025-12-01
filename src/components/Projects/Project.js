// Project.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Project = ({ project }) => {
    const { _id, img, name, description, details1, details2, details3, details4, github } = project;
    const navigate = useNavigate();
    
    const navigateProjectDetails = (id) => {
        navigate(`/projects/${id}`);
    };

    return (
        <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Project Image */}
            <div className="relative overflow-hidden">
                <img 
                    src={img} 
                    alt={name} 
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Tech Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                        {details1}
                    </span>
                    <span className="px-3 py-1 bg-purple-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                        {details2}
                    </span>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {[details1, details2, details3, details4].map((tech, index) => (
                        tech && (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                            >
                                {tech}
                            </span>
                        )
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button
                        onClick={() => navigateProjectDetails(_id)}
                        className="flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors group/btn"
                    >
                        View Details
                        <FontAwesomeIcon 
                            icon={faArrowRight} 
                            className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" 
                        />
                    </button>
                    
                    <div className="flex space-x-3">
                        {/* <a 
                            href={github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group/github"
                            title="GitHub"
                        >
                            <FontAwesomeIcon 
                                icon={faGithub} 
                                className="text-gray-700 dark:text-gray-300 group-hover/github:text-black dark:group-hover/github:text-white" 
                            />
                        </a> */}
                        <a 
                            href={`https://example.com/${_id}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group/live"
                            title="Live Demo"
                        >
                            <FontAwesomeIcon 
                                icon={faExternalLinkAlt} 
                                className="text-gray-700 dark:text-gray-300 group-hover/live:text-blue-600" 
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;