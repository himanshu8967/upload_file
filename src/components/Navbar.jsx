// Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Define active and inactive class styles
    const activeClass = "bg-blue-600 text-white";
    const inactiveClass = "text-blue-600 hover:bg-blue-100";

    return (
        <nav className="fixed top-0 left-0 w-full z-20 bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-blue-600">File Upload</h1>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `${isActive ? activeClass : inactiveClass} text-base md:text-lg transition-all duration-300 ease-in-out px-3 py-2 rounded-md flex items-center`
                            }
                        >
                            <FaSignInAlt className="mr-2" /> Login
                        </NavLink>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden flex flex-col space-y-2 mt-2">
                        <Link
                            to="/login"
                            className="bg-blue-600 text-white px-5 py-3 rounded-lg transition duration-300 transform hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
