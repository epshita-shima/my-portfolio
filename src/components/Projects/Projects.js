// Projects.js
import React from 'react';
import Project from './Project';
import useProject from '../../hook/useProject';

const Projects = () => {
    const [projects] = useProject();
    
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Featured <span className="text-gray-600 dark:text-gray-300">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        A collection of my recent work showcasing full-stack development skills and modern web technologies
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <Project key={project._id} project={project} />
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-16">
                    <button className="px-8 py-3 border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-800 font-bold rounded-xl transition-all duration-300">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;