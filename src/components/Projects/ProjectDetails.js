import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../../hook/useProject';

const ProjectDetails = () => {

    // const { img, name, description, details1, details2, details3, details4 } = project;
    const { projectId } = useParams();

    const [projects] = useProject();
    console.log(projects);

    const projectDetails = projects.filter(details => console.log(details))
    console.log(projectDetails);
    return (
        <div className='lg:container pl-8 pr-8 sm:p-12 md:p-12 lg:p-0  lg:mx-auto mt-8 lg:mt-24'>
            <h2 className='text-5xl text-gray-600 mb-8'>My Projects_{projectId}</h2>

            {/* <img className='w-1/2' src={img} alt="" />
            <div className='mt-12'>
                <div className='lg:ml-8 sm:ml-0'>
                    <h3 className='text-4xl font-semibold text-gray-600 mb-8'>{name}</h3>
                    <p className='text-2xl text-gray-500 leading-8'>{description}</p>
                </div>
                <div className='lg:ml-8 sm:ml-4  flex justify-around w-full lg:w-1/2 mt-12'>
                    <button className='border-2 p-2 rounded text-xl'>{details1}</button>
                    <button className='border-2 p-2 rounded text-xl'>{details2}</button>
                    <button className='border-2 p-2 rounded text-xl'>{details3}</button>
                    <button className='border-2 p-2 rounded text-xl'>{details4}</button>
                </div>
            </div> */}
        </div>
    );
};

export default ProjectDetails;