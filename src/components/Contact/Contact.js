import React from 'react';

const Contact = () => {
    return (
        <div className='bg-gradient-to-r from-violet-500 to-fuchsia-400'>
            <div className='lg:container lg:p-0 sm:p-12 lg:mx-auto mt-24 lg:flex sm:block items-center '>
                <div className='pt-24 mb-16'>
                    <h2 className='text-5xl text-white font-bold mb-12 tracking-widest'>Get in touch_</h2>
                    <p className='text-white text-xl font-semibold mb-2'><span>Phone:</span> +880 1757092331</p>
                    <p className='text-white text-xl font-semibold mb-4'><span>Email:</span> epshitashima@gmail.com</p>
                    <div>
                        <p className='text-white mb-2 w-1/3  p-2 text-xl hover:bg-white hover:text-primary'><a href="">Facebook</a></p>
                        <p className='text-white mb-2 w-1/3  p-2 text-xl hover:bg-white hover:text-primary'><a href="">LinkedIn</a></p>
                        <p className='text-white mb-2 w-1/3  p-2 text-xl hover:bg-white hover:text-primary'><a href="">GitHub</a></p>
                    </div>
                </div>
                <div className='lg:ml-24 pt-16 sm:ml-0'>
                    <p className='text-white font-semibold text-xl mb-8'>or just write me a letter here_</p>
                    <form action="https://formsubmit.co/epshitashima@gmail.com" method="POST">
                        <input type="text" name="Name" id="name" placeholder="your name" class="input input-ghost w-full mb-3 text-xl" />
                        <br />
                        <input type="email" name="Email" id="email" placeholder="your email" class="input input-ghost w-full text-xl mb-3" />
                        <br />
                        <textarea name="Message" id="message" class="textarea textarea-ghost w-full  mb-3 " placeholder="message"></textarea>
                        <br />
                        <button type="submit" className='btn btn-secondary w-full text-xl text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;