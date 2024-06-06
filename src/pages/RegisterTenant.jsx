import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.svg";
import axios from 'axios';

export default function RegisterTenant() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        idproofnumber: '',
        phonenumber: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        idproofnumber: '',
        phonenumber: ''
    });

    const [validationError, setValidationError] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });

        // Individual field validation
        switch (name) {
            case 'name':
                if (!/^[a-zA-Z\s]*$/.test(value)) {
                    setErrors(prevErrors => ({ ...prevErrors, name: "Name should contain only letters and spaces." }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, name: '' }));
                }
                break;
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) {
                    setErrors(prevErrors => ({ ...prevErrors, email: "Please enter a valid email address." }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, email: '' }));
                }
                break;
            case 'phonenumber':
                if (!/^\d{10}$/.test(value)) {
                    setErrors(prevErrors => ({ ...prevErrors, phonenumber: "Please enter a 10-digit phone number." }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, phonenumber: '' }));
                }
                break;
            case 'password':
                if (value.length < 6) {
                    setErrors(prevErrors => ({ ...prevErrors, password: "Password must be at least 6 characters long." }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, password: '' }));
                }
                break;
            case 'idproofnumber':
                if (!/^\d{12}$/.test(value)) {
                    setErrors(prevErrors => ({ ...prevErrors, idproofnumber: "Please enter a valid 12-digit Aadhar number." }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, idproofnumber: '' }));
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Check for any remaining validation errors
        const hasErrors = Object.values(errors).some(error => error);
        if (hasErrors) {
            setValidationError("Please fix the errors before submitting.");
            return;
        }

        // If all validations pass, proceed with form submission
        axios.post('http://localhost:4000/registertenant', values)
            .then(res => {
                alert("Registered Successfully");
                navigate('/login');
            })
            .catch(err => console.error(err));
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={Logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                                {errors.password && <p className="text-red-500">{errors.password}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="idproofnumber" className="block text-sm font-medium leading-6 text-gray-900">
                                Aadhar Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="idproofnumber"
                                    name="idproofnumber"
                                    type="number"
                                    autoComplete="idproofnumber"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                                {errors.idproofnumber && <p className="text-red-500">{errors.idproofnumber}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phonenumber" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phonenumber"
                                    name="phonenumber"
                                    type="number"
                                    autoComplete="phonenumber"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                                {errors.phonenumber && <p className="text-red-500">{errors.phonenumber}</p>}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </button>
                        </div>
                        {validationError && <p className="text-red-500">{validationError}</p>}
                    </form>

                </div>
            </div>
        </>
    );
}