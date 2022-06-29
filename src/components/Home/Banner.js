import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import portfolio from '../../assets/image/portfolio.png'
import './Banner.css';
import Typical from 'react-typical';

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-400 '>
            <div div className='flex pt-24 pb-16 lg:container lg:mx-auto' >
                <div className='lg:flex hidden'>
                    <img className='h-96 w-full  bg-black bg-opacity-40 rounded' src={portfolio} alt="" />
                </div>
                <div className='ml-8 lg:14'>
                    <div>
                        <h2 className='text-5xl text-white font-bold tracking-wide mb-2'>
                            <Typical
                                steps={['Epshita Shima_', 1000]}
                                loop={Infinity}
                                wrapper="p"
                            ></Typical></h2>
                        <p className='text-xl font-semibold text-white mb-8'>frontend developer, wordpress developer</p>

                        <h3 className='text-white text-xl lg:text-2xl md:text-2xl font-semibold mb-4'><span className='opacity-40 mr-6'>Age:</span>25</h3>
                        <h3 className='text-white text-xl lg:text-2xl md:text-2xl font-semibold mb-4'><span className='opacity-40 mr-6'>Phone:</span> +880 1757092331</h3>
                        <h3 className='text-white text-xl lg:text-2xl md:text-2xl font-semibold mb-4'><span className='opacity-40 mr-6'>Email:</span> epshitashima@gmail.com</h3>
                        <h3 className='text-white text-xl lg:text-2xl md:text-2xl font-semibold mb-8'><span className='opacity-40 mr-6 '>Address:</span> Mirpur-2, Dhaka-1216</h3>
                    </div>
                    <div className='mb-4'>
                        <span className='mr-6 text-white text-3xl'><a className='hover:text-white' href="https://github.com/epshita-shima"><FontAwesomeIcon icon={faGithub} /></a></span>
                        <span className='mr-6 text-white text-3xl'><a className='hover:text-white' href="https://github.com/epshita-shima"><FontAwesomeIcon icon={faLinkedin} /></a></span>
                        <span className='text-white text-3xl'><a className='hover:text-white' href="https://github.com/epshita-shima"><FontAwesomeIcon icon={faFacebook} /></a></span>
                    </div>

                </div>
            </div >

        </div >


    );
};

export default Banner;