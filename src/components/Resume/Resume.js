import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGraduationCap, 
  faSchool, 
  faUniversity,
  faCode,
  faDatabase,
  faTools,
  faLayerGroup,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
    const education = [
        {
            icon: faUniversity,
            institution: "Bangladesh University of Business and Technology",
            period: "2017 - 2021",
            degree: "Bachelor of Science in Computer Science and Engineering",
            description: "Specialized in software engineering and web technologies"
        },
        {
            icon: faSchool,
            institution: "Dr Abdur Razzak Municipal College",
            period: "2014 - 2016",
            degree: "Higher Secondary Certificate",
            description: "Science Group - Physics, Chemistry, Mathematics"
        },
        {
            icon: faGraduationCap,
            institution: "Barabaldia School and College",
            period: "2008 - 2013",
            degree: "Secondary School Certificate",
            description: "Science Group"
        }
    ];

    const technicalSkills = [
        { name: "HTML", percentage: 90, category: "frontend" },
        { name: "CSS", percentage: 85, category: "frontend" },
        { name: "JavaScript", percentage: 90, category: "frontend" },
        { name: "Bootstrap 5", percentage: 90, category: "frontend" },
        { name: "Tailwind CSS", percentage: 80, category: "frontend" },
        { name: "React.js", percentage: 80, category: "frontend" },
        { name: "jQuery", percentage: 40, category: "frontend" },
        { name: "React Bootstrap", percentage: 85, category: "frontend" },
        { name: "Node.js", percentage: 80, category: "backend" },
        { name: "Firebase", percentage: 90, category: "backend" },
        { name: "MongoDB", percentage: 75, category: "backend" },
        { name: "Express.js", percentage: 70, category: "backend" }
    ];

    const softSkills = [
        "Problem Solving", "Team Collaboration", "Communication", 
        "Time Management", "Adaptability", "Attention to Detail",
        "Creative Thinking", "Project Management"
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                        <FontAwesomeIcon icon={faCode} className="text-2xl text-gray-600 dark:text-gray-400" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Resume & <span className="text-gray-600 dark:text-gray-300">Skills</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Building scalable web applications with modern technologies. Passionate about creating efficient solutions 
                        and continuously expanding technical expertise.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Left Column - Education */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-10 mb-12">
                            <div className="flex items-center mb-8">
                                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 dark:bg-blue-900/30 rounded-xl mr-4">
                                    <FontAwesomeIcon icon={faGraduationCap} className="text-xl text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education Background</h3>
                            </div>

                            <div className="space-y-8 relative">
                                {/* Timeline line */}
                                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                                
                                {education.map((edu, index) => (
                                    <div key={index} className="relative pl-16">
                                        <div className="absolute left-4 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 border-4 border-blue-100 dark:border-gray-700 rounded-full">
                                            <FontAwesomeIcon icon={edu.icon} className="text-blue-600 dark:text-blue-400" />
                                        </div>
                                        
                                        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-md transition-shadow">
                                            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
                                                <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                                                    {edu.institution}
                                                </h4>
                                                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mt-2 lg:mt-0">
                                                    {edu.period}
                                                </span>
                                            </div>
                                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                {edu.degree}
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-10">
                            <div className="flex items-center mb-8">
                                <div className="w-12 h-12 flex items-center justify-center bg-green-50 dark:bg-green-900/30 rounded-xl mr-4">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-xl text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Soft Skills</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {softSkills.map((skill, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                                    >
                                        <FontAwesomeIcon 
                                            icon={faCheckCircle} 
                                            className="text-green-500 mr-3 group-hover:scale-110 transition-transform" 
                                        />
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Technical Skills */}
                    <div>
                        <div className="sticky top-24">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-10 mb-8">
                                <div className="flex items-center mb-8">
                                    <div className="w-12 h-12 flex items-center justify-center bg-purple-50 dark:bg-purple-900/30 rounded-xl mr-4">
                                        <FontAwesomeIcon icon={faTools} className="text-xl text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Technical Skills</h3>
                                </div>

                                {/* Frontend Skills */}
                                <div className="mb-10">
                                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-6 flex items-center">
                                        <FontAwesomeIcon icon={faLayerGroup} className="text-blue-500 mr-2" />
                                        Frontend Development
                                    </h4>
                                    <div className="space-y-6">
                                        {technicalSkills.filter(skill => skill.category === "frontend").map((skill, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                    <span className="text-gray-600 dark:text-gray-400 font-bold">{skill.percentage}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                                    <div 
                                                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000"
                                                        style={{ width: `${skill.percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Backend Skills */}
                                <div>
                                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-6 flex items-center">
                                        <FontAwesomeIcon icon={faDatabase} className="text-green-500 mr-2" />
                                        Backend Development
                                    </h4>
                                    <div className="space-y-6">
                                        {technicalSkills.filter(skill => skill.category === "backend").map((skill, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between mb-2">
                                                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                    <span className="text-gray-600 dark:text-gray-400 font-bold">{skill.percentage}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                                    <div 
                                                        className="bg-gradient-to-r from-green-500 to-teal-600 h-2.5 rounded-full transition-all duration-1000"
                                                        style={{ width: `${skill.percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;