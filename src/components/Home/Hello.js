import React from 'react';

const Hello = () => {
    return (
        <div className='lg:container pl-8 pr-8 sm:p-12 md:p-12 lg:p-0  lg:mx-auto mt-8 lg:mt-24'>
            <h2 className='text-5xl text-gray-600 mb-8'>Hi_</h2>
            <p className='text-2xl text-justify text-gray-500 leading-9 lg:leading-8 mb-16'>I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools. </p>

            <a href="https://drive.google.com/file/d/1_iuOA6g4Udwjr-UFRT68mQMD9_l-msgg/view?usp=sharing"><button class="btn btn-active btn-lg btn-primary text-white font-bold">Download CV</button></a>
            <hr className='mb-24 mt-24' />
        </div>
    );
};

export default Hello;