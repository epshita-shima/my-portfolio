import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import Typical from 'react-typical';

const Resume = () => {
    return (
        <div className='lg:container pl-8 pr-8 sm:p-12 md:p-12 lg:p-0  lg:mx-auto lg:mt-24 mb-16'>

            <div>

                <h2 className='text-5xl text-gray-600 mb-8'>
                    <Typical
                        steps={['Resume_', 1000]}
                        loop={5}
                        wrapper="p"
                    ></Typical>
                </h2>
                <p className='text-2xl text-justify text-gray-500 leading-9 lg:leading-8 mb-16'>Build up a career in a challenging and rewarding position at any winning organization where
                    creativity, sincerity, leadership, term values, and performance are the criteria for one's appraisal and
                    recognition. Working quickly and carefully to complete small edits requested by customers, develop plans for completing larger projects, and suggest new solutions to improve existing websites. Comfortable working with Bootstrap, Tailwind, JavaScript, React.js, Node.js, Firebase Authentication, and MongoDB.</p>
            </div>
            <div>
                <h3 className='text-2xl  text-gray-400 uppercase tracking-widest font-bold'>Education</h3>
                <div className='border-l-4 border-indigo-500'>
                    <div className='ml-8 mt-8'>
                        <p className='text-indigo-500 text-2xl font-semibold mb-4'>Bangladesh University of Business and Technology</p>
                        <p className='text-2xl  text-gray-400 font-semibold mb-2'>2017-2021</p>
                        <p className='text-2xl  text-gray-400 '>Bachelor of Science in Computer Science and Engineering</p>
                    </div>
                </div>
                <div className='border-l-4 border-indigo-500 mt-16'>
                    <div className='ml-8 mt-8'>
                        <p className='text-indigo-500 text-2xl font-semibold mb-4'>Dr Abdur Razzak Municipal College</p>
                        <p className='text-2xl  text-gray-400 font-semibold mb-2'>2014-2016</p>
                        <p className='text-2xl  text-gray-400 '>Science</p>
                    </div>
                </div>
                <div className='border-l-4 border-indigo-500 mt-16'>
                    <div className='ml-8 mt-8'>
                        <p className='text-indigo-500 text-2xl font-semibold mb-4'>Barabaldia School and College</p>
                        <p className='text-2xl  text-gray-400 font-semibold mb-2'>2008-2013</p>
                        <p className='text-2xl  text-gray-400 '>Science</p>
                    </div>
                </div>
            </div >

            <div className='mt-16'>
                <h3 className='text-2xl  text-gray-400 uppercase font-bold tracking-widest'>General Skills</h3>
                <div className='block lg:flex lg:justify-around '>
                    <div className='w-full p-2 lg:w-1/3'>
                        <div className='mt-4 mb-4'>
                            <div className='flex justify-between'>
                                <p>HTML</p>
                                <p>90%</p>

                            </div>
                            <progress class="progress progress-primary w-full" value="90" max="100"></progress>
                        </div>
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <p>CSS</p>
                                <p>85%</p>

                            </div>
                            <progress class="progress progress-primary w-full" value="85" max="100"></progress>
                        </div>
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <p>JavaScript</p>
                                <p>90%</p>

                            </div>
                            <progress class="progress progress-primary w-full" value="90" max="100"></progress>
                        </div>
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <p>jQuery</p>
                                <p>40%</p>

                            </div>
                            <progress class="progress progress-primary w-full" value="40" max="100"></progress>
                        </div>
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <p>Bootstrap5</p>
                                <p>90%</p>

                            </div>
                            <progress class="progress progress-primary w-full" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div className='w-full p-2 lg:w-1/3'>
                        <div className='mt-4 mb-4'>
                            <div className='flex justify-between'>
                                <p>Tailwind CSS</p>
                                <p>80%</p>

                            </div>
                            <progress class="progress progress-primary w-full" value="80" max="100"></progress>
                        </div>
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <p>React Bootstrap</p>
                                <p>85%</p>

                            </div>
                            <progress class="progress progress-primary w-full" value="85" max="100"></progress>
                        </div>
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <p>React</p>
                                <p>80%</p>

                            </div>
                            <progress class="progress progress-primary w-full" value="80" max="100"></progress>
                        </div>
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <p>Node.js</p>
                                <p>80%</p>
                            </div>
                            <progress class="progress progress-primary w-full" value="80" max="100"></progress>
                        </div>
                        <div className='mb-4'>
                            <div className='flex justify-between'>
                                <p>Firebase</p>
                                <p>90%</p>
                            </div>
                            <progress class="progress progress-primary w-full" value="90" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;