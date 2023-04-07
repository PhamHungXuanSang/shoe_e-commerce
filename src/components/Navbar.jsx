import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="px-16 w-full h-[54px] shadow-xl flex items-center justify-between">
            <NavLink to={'/'} className="w-[150px] h-full cursor-pointer">
                <img
                    className="w-full h-full object-cover"
                    src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(1269).png"
                    alt="Logo"
                />
            </NavLink>
            <div className="h-full flex items-center">
                <div className="h-[60%] flex items-center">
                    <BsSearch />
                    <input
                        className="rounded outline-none h-full ml-4 p-1 caret-violet-400"
                        placeholder="Enter search ..."
                    />
                </div>
                <div className="h-full flex">
                    <div className="group relative py-4 mx-2 flex items-center justify-center text-xl font-medium hover:text-violet-600 hover:cursor-pointer">
                        <p>Home</p>
                        <p className="group-hover:block hidden absolute bottom-1 w-[100%] h-1 bg-violet-600 opacity-80"></p>
                    </div>
                    <div className="group relative py-4 mx-2 flex items-center justify-center text-xl font-medium hover:text-violet-600 hover:cursor-pointer">
                        <p className="mr-1">Category</p>
                        <IoIosArrowDown className="mt-1" size={16} />
                        <p className="group-hover:block hidden absolute bottom-1 w-[100%] h-1 bg-violet-600 opacity-80"></p>
                    </div>
                    <div className="group relative py-4 mx-2 flex items-center justify-center text-xl font-medium hover:text-violet-600 hover:cursor-pointer">
                        <p>Contact Us</p>
                        <p className="group-hover:block hidden absolute bottom-1 w-[100%] h-1 bg-violet-600 opacity-80"></p>
                    </div>
                    <div className="group relative py-4 mx-2 flex items-center justify-center text-xl font-medium hover:text-violet-600 hover:cursor-pointer">
                        <p>About Us</p>
                        <p className="group-hover:block hidden absolute bottom-1 w-[100%] h-1 bg-violet-600 opacity-80"></p>
                    </div>
                </div>
                <div className="h-[80%] flex items-center ml-[170px]">
                    <Link
                        to={'/SignUp'}
                        className={
                            'select-none transition duration-500 ease-in-out h-[80%] px-4 mx-2 rounded font-medium bg-violet-400 hover:scale-105'
                        }
                    >
                        <button className="h-full">Sign up</button>
                    </Link>
                    <Link
                        to={'/Login'}
                        className={
                            'select-none transition duration-500 ease-in-out h-[80%] px-4 ml-2 rounded font-medium bg-violet-400 hover:scale-105'
                        }
                    >
                        <button className="h-full">Log in</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
