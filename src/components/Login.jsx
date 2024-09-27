import React, { useState } from 'react';
import { useNavigate, Form, Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required'; 
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className=" min-h-screen flex items-center justify-center pt-5 mt-5  bg-gray-100"> 
      <div className="bg-slate-50 rounded-lg shadow-lg p-8 sm:p-10 md:p-12 lg:p-14 max-w-md w-full transition-transform transform hover:scale-105 ease-in-out duration-500"> {/* Changed to slate color */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <Form method="post" className="space-y-6">
          {/* Email */}
          <div className="relative">
            <label className="block text-gray-800 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border rounded-lg bg-gray-200 p-3 transition-all duration-300 ease-in-out focus-within:border-blue-500 hover:border-blue-600">
              <FaEnvelope className="text-gray-600 mr-3 transition-transform duration-300 ease-in-out transform hover:scale-110" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-none outline-none focus:ring-0 transition-all duration-300 ease-in-out"
                placeholder="Enter your email"
                required
              />
            </div>
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-800 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded-lg bg-gray-200 p-3 transition-all duration-300 ease-in-out focus-within:border-blue-500 hover:border-blue-600">
              <FaLock className="text-gray-600 mr-3 transition-transform duration-300 ease-in-out transform hover:scale-110" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent border-none outline-none focus:ring-0 transition-all duration-300 ease-in-out"
                placeholder="Enter your password"
                required
              />
            </div>
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              type="submit"
              className="flex-1 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </Form>

        {/* New User Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-lg font-medium">
            New User?{' '}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 ease-in-out relative group"
            >
              SignUp
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
