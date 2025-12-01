import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faArrowRight, faUserTie, faCode, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Hello = () => {
    const skills = [
        "Web Development", "Responsive Design", "UI/UX", 
        "Frontend Development", "SEO", "Testing", "Team Collaboration"
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                        <FontAwesomeIcon icon={faUserTie} className="text-2xl text-gray-600 dark:text-gray-400" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Hello, I'm <span className="text-gray-600 dark:text-gray-300">Epshita</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 mx-auto mb-8"></div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto mb-16">
                    {/* Left Column - Main Content */}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
                                Junior Full Stack Developer
                            </h3>
                            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                I build web applications from the ground up — from concept and design to implementation and deployment. 
                                Passionate about creating efficient, scalable solutions with clean code and best practices.
                            </p>
                            <div className="flex items-center mb-10">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl mr-4">
                                    <FontAwesomeIcon icon={faCode} className="text-lg text-gray-600 dark:text-gray-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-700 dark:text-gray-300">Full Stack Focus</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Frontend & Backend Development</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl mr-4">
                                    <FontAwesomeIcon icon={faLightbulb} className="text-lg text-gray-600 dark:text-gray-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-700 dark:text-gray-300">Quick Learner</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Adaptable & Always Evolving</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills Tags */}
                        <div className="mb-12">
                            <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Core Skills</h4>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span 
                                        key={index}
                                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stats & CTA */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-10">
                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                                <div className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-2">2+</div>
                                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                                <div className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-2">50+</div>
                                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Why Work With Me?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></div>
                                        <span className="text-gray-600 dark:text-gray-400">Clean, maintainable code following best practices</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></div>
                                        <span className="text-gray-600 dark:text-gray-400">Strong problem-solving abilities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></div>
                                        <span className="text-gray-600 dark:text-gray-400">Excellent team collaboration skills</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3"></div>
                                        <span className="text-gray-600 dark:text-gray-400">Commitment to continuous learning</span>
                                    </li>
                                </ul>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="https://drive.google.com/file/d/1_iuOA6g4Udwjr-UFRT68mQMD9_l-msgg/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1"
                                >
                                    <button className="w-full px-6 py-4 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold rounded-xl flex items-center justify-center transition-all hover:shadow-lg group">
                                        <FontAwesomeIcon icon={faDownload} className="mr-3" />
                                        Download CV
                                        <FontAwesomeIcon icon={faArrowRight} className="ml-3 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </a>
                                <button className="flex-1 px-6 py-4 border-2 border-gray-800 dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-800 text-gray-800 dark:text-gray-300 font-bold rounded-xl transition-all">
                                    View Projects
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="max-w-4xl mx-auto">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Hello;