import useProject from '../../hook/useProject';
import Project from './Project';

const Projects = () => {
    const [projects] = useProject();
    console.log(projects);
    return (
        <div className='lg:container sm:p-12 md:p-12 lg:p-0  lg:mx-auto lg:mt-24'>
            <h2 className='text-5xl text-gray-600 mb-8'>My Projects_</h2>
            <div>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}

                    ></Project>)

                }
            </div>
        </div>
    );
};

export default Projects;