import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const menuItem = <>

        <li className='text-[#858792] font-bold text-xl'><Link to='/'>Home</Link></li>
        <li className='text-[#858792] font-bold text-xl'><Link to='/hello'>Hello</Link></li>
        <li className='text-[#858792] font-bold text-xl'><Link to='/resume'>Resume</Link></li>
        <li className='text-[#858792] font-bold text-xl'><Link to='/projects'>Projects</Link></li>
        <li className='text-[#858792] font-bold text-xl'><Link to='/blog'>Blog</Link></li>
        <li className='text-[#858792] font-bold text-xl'><Link to='/contact'>Contact</Link></li>



    </>
    return (

        <div class="navbar shadow">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  text-xl rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl"></a>
            </div>
            <div class="navbar-start hidden lg:flex ">
                <ul class="menu menu-horizontal p-0  ">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;