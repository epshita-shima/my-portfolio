import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../../hook/useProject';

const ProjectDetails = () => {

    const { projectId } = useParams();

    const [project, setProject] = useState('');

    useEffect(() => {
        const url = `https://boiling-hollows-61344.herokuapp.com/projects/${projectId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])


    return (
        <div className='lg:container sm:p-12 md:p-12 lg:p-0  lg:mx-auto mt-8 lg:mt-24'>
            <h2 className='text-5xl text-gray-600 mb-8'>Projects Details_{project.name}</h2>

            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={project.img} alt="Movie" /></figure>
                <div class="card-body ">
                    <h2 class="card-title text-4xl">{project.name}</h2>
                    <p class="text-xl text-gray-400 text-justify">{project.description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary"><a href={project.live} className="hover:text-white">Project Live</a></button>
                        <button class="btn btn-primary"><a href={project.live} className="hover:text-white">GitHub Link</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;