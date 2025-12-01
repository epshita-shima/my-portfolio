// ProjectDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faExternalLinkAlt, 
    // faGithub, 
    faCalendarAlt,
    faCode,
    faLayerGroup,
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Find project from dummy data based on ID
        const dummyProjects = [
            // ... same dummy projects array as in useProject
        ];
        
        const foundProject = dummyProjects.find(p => p._id === projectId);
        
        setTimeout(() => {
            setProject(foundProject);
            setLoading(false);
        }, 500);
    }, [projectId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-600">Loading project details...</div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-600">Project not found</div>
            </div>
        );
    }

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Back Button */}
                <button 
                    onClick={() => window.history.back()}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mb-8 group"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </button>

                {/* Project Header */}
                <div className="max-w-6xl mx-auto mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                                {project.name}
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex space-x-4 mt-4 lg:mt-0">
                            <a 
                                href={project.live} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center transition-all hover:shadow-lg"
                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                                Live Demo
                            </a>
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-3 border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-800 font-bold rounded-xl flex items-center transition-all"
                            >
                                {/* <FontAwesomeIcon icon={faGithub} className="mr-2" /> */}
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Content */}
                <div className="max-w-6xl mx-auto">
                    {/* Main Image */}
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src={project.img} 
                            alt={project.name} 
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Project Details */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                                    <FontAwesomeIcon icon={faLayerGroup} className="text-blue-500 mr-3" />
                                    Project Overview
                                </h3>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Key Features</h4>
                                    <ul className="space-y-3 mb-8">
                                        {project.features?.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                                                <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Project Info */}
                        <div>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sticky top-24">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                                    <FontAwesomeIcon icon={faCode} className="text-purple-500 mr-3" />
                                    Technologies Used
                                </h3>
                                
                                <div className="mb-8">
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies?.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                                            <FontAwesomeIcon icon={faCalendarAlt} className="text-green-500 mr-2" />
                                            Project Details
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Category:</span>
                                                <span className="font-medium text-gray-800 dark:text-gray-300">Web Application</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                                                <span className="font-medium text-green-600 dark:text-green-400">Completed</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Type:</span>
                                                <span className="font-medium text-gray-800 dark:text-gray-300">Full Stack</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;