import React, { useState } from 'react';
import { useNavigate, Form, useActionData, Link } from 'react-router-dom';
import { FaUser, FaPhone, FaKey } from 'react-icons/fa';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const navigate = useNavigate();
    const data = useActionData();

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.phone || !/^\+\d{1,3}\d{10}$/.test(formData.phone))
            newErrors.phone = 'Phone number must start with a country code and be followed by 10 digits';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password || formData.password.length < 8)
            newErrors.password = 'Password must be at least 8 characters long';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (touched[name]) validate();
    };

    const handleBlur = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        });
        validate();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            navigate('/');
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            phone: '',
            email: '',
            password: '',
        });
        setErrors({});
        setTouched({});
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-slate-100 p-4 py-20">
            <div className="max-w-sm w-full bg-white text-black rounded-lg shadow-lg p-6 sm:p-8 md:p-10 transition-transform transform hover:scale-105 ease-in-out duration-500">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-5">Signup</h2>
                <Form method='post' className="space-y-5">
                    {data && data.errors && (
                        <ul className="mb-4">
                            {Object.values(data.errors).map((err, index) => (
                                <li key={index} className="text-red-400">{err}</li>
                            ))}
                        </ul>
                    )}

                    {/* Name */}
                    <div className="relative">
                        <label className="block text-gray-600 font-semibold mb-1" htmlFor="name">Name</label>
                        <div className="flex items-center border rounded-lg bg-gray-100 p-2 focus-within:border-indigo-500 hover:border-indigo-600">
                            <FaUser className="text-gray-600 mr-2" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full bg-transparent border-none outline-none focus:ring-0 ${errors.name ? 'border-red-500' : ''}`}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        {touched.name && errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <label className="block text-gray-600 font-semibold mb-1" htmlFor="phone">Phone Number</label>
                        <div className="flex items-center border rounded-lg bg-gray-100 p-2 focus-within:border-indigo-500 hover:border-indigo-600">
                            <FaPhone className="text-gray-600 mr-2" />
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full bg-transparent border-none outline-none focus:ring-0 ${errors.phone ? 'border-red-500' : ''}`}
                                placeholder="Enter your mobile number"
                                required
                            />
                        </div>
                        {touched.phone && errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <label className="block text-gray-600 font-semibold mb-1" htmlFor="email">Email</label>
                        <div className="flex items-center border rounded-lg bg-gray-100 p-2 focus-within:border-indigo-500 hover:border-indigo-600">
                            <FaUser className="text-gray-600 mr-2" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full bg-transparent border-none outline-none focus:ring-0 ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        {touched.email && errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="block text-gray-600 font-semibold mb-1" htmlFor="password">Password</label>
                        <div className="flex items-center border rounded-lg bg-gray-100 p-2 focus-within:border-indigo-500 hover:border-indigo-600">
                            <FaKey className="text-gray-600 mr-2" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full bg-transparent border-none outline-none focus:ring-0 ${errors.password ? 'border-red-500' : ''}`}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {touched.password && errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <button
                            type="submit"
                            className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600"
                        >
                            Sign Up
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-500"
                        >
                            Reset
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-500"
                        >
                            Cancel
                        </button>
                    </div>

                    <p className="mt-4 text-center text-gray-600">
                        Already have an account? <Link to="/login" className="text-indigo-500 hover:text-indigo-400">Login</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default Signup;
