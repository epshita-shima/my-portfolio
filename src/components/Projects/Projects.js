import React, { useEffect, useState } from 'react';
import useProject from '../../hook/useProject';
import Project from './Project';

const Projects = () => {
    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     fetch('projects.json')
    //         .then(res => res.json())
    //         .then(data => setProjects(data))
    // }, [])
    const [projects] = useProject();
    console.log(projects);
    return (
        <div className='lg:container pl-8 pr-8 sm:p-12 md:p-12 lg:p-0  lg:mx-auto mt-8 lg:mt-24'>
            <h2 className='text-5xl text-gray-600 mb-8'>My Projects_</h2>
            <div>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}

                    ></Project>)

                }
                {/* {
                    projects.map(project => <ProjectDetails
                        key={project.id}
                        project={project}>
                    </ProjectDetails>)
                } */}

            </div>
        </div>
    );
};

export default Projects;