import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { id, img, name, description, details1, details2, details3, details4, live } = project;
    const navigate = useNavigate();
    const navigateProjectDetails = id => {
        navigate(`projects/${id}`)

    }

    return (
        <div className='lg:flex sm:block mt-24'>
            <img className='w-1/2' src={img} alt="" />
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
                <div className='flex justify-center items-center mt-8'>
                    <button onClick={() => navigateProjectDetails(id)} className='btn btn-primary'>Project details</button>
                    <p className='text-end text-primary text-xl mt-4 ml-4'><a href="https://adoring-feynman-dd5b1e.netlify.app">{live}</a></p>
                </div>
            </div>
        </div>
    );
};

export default Project;