// import React , {useState} from 'react'
// import Logo from "../assets/logo.svg";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function RegisterOwner() {

//     const navigate = useNavigate();
//     const [values ,setValues] = useState({
//       name:'',
//       email:'',
//       password:'',
//       phonenumber:''
//     })

//     const [isRegistered, setIsRegistered] = useState(false);

//     const handleChange = (event) =>{
//        setValues({...values , [event.target.name] : [event.target.value]})
//     }
    
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       axios.post('http://localhost:4000/registerowner',values)
//       .then((res) => {
//         console.log("Registered Successfully");
//         setIsRegistered(true);
//       })
//       .catch(err => console.error(err));
//     }
    
//     if (isRegistered) {
//       navigate('/loginowner');
//     }

//         return (
//             <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//               <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                 <img
//                   className="mx-auto h-10 w-auto"
//                   src={Logo}
//                   alt="Your Company"
//                 />
//                 <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//                   Register your account
//                 </h2>
//               </div>
      
//               <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                 <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>

//                   <div>
//                     <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
//                       Name
//                     </label>
//                     <div className="mt-2">
//                       <input
//                         id="name"
//                         name="name"
//                         type="text"
//                         autoComplete="name"
//                         required
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <div className="flex items-center justify-between">
//                     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                       Email address
//                     </label>
//                     </div>
//                     <div className="mt-2">
//                       <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         autoComplete="email"
//                         required
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
      
//                   <div>
//                     <div className="flex items-center justify-between">
//                       <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                         Password
//                       </label>
//                     </div>
//                     <div className="mt-2">
//                       <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         autoComplete="current-password"
//                         required
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <div className="flex items-center justify-between">
//                       <label htmlFor="phonenumber" className="block text-sm font-medium leading-6 text-gray-900">
//                         Phone Number
//                       </label>
//                     </div>
//                     <div className="mt-2">
//                       <input
//                         id="phonenumber"
//                         name="phonenumber"
//                         type="number"
//                         autoComplete="phonenumber"
//                         required
//                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
      
//                   <div>
//                     <button
//                       type="submit"
//                       className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                     >
//                       Sign in
//                     </button>
//                   </div>
//                 </form>
      
                
//               </div>
//             </div>
//         )
//       }

import React, { useState } from 'react';
import Logo from "../assets/logo.svg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterOwner() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        phonenumber: ''
    });
    const [isRegistered, setIsRegistered] = useState(false);
    const [validationError, setValidationError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        let newValue = value;

        // Enforce name to contain only characters
        if (name === "name") {
            newValue = value.replace(/[^A-Za-z]/gi, '');
        }

        // Enforce phone number to be exactly 10 digits
        if (name === "phonenumber") {
            newValue = value.replace(/\D/g, ''); // Remove non-digits
            if (newValue.length > 10) {
                newValue = newValue.slice(0, 10); // Limit to 10 characters
            }
        }

        setValues({ ...values, [name]: newValue });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Field validation
        if (!values.name || !values.email || !values.password || !values.phonenumber) {
            setValidationError('Name, Email, Password, and Phone Number are required.');
            return;
        }

        if (values.phonenumber.length !== 10) {
            alert('Please enter a 10-digit phone number.');
            return;
        }

        axios.post('http://localhost:4000/registerowner', values)
            .then((res) => {
                console.log("Registered Successfully");
                setIsRegistered(true);
            })
            .catch(err => console.error(err));
    };

    if (isRegistered) {
        // Show popup and redirect to login page
        alert('Registration Successful. Please login.');
        navigate('/loginowner');
    }

    return (
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
                        <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
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
                                value={values.name}
                            />
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
                                value={values.email}
                            />
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
                                value={values.password}
                            />
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
                                type="text"
                                autoComplete="phonenumber"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={handleChange}
                                value={values.phonenumber}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                    {validationError && <p className="text-red-500">{validationError}</p>}
                </form>
            </div>
        </div>
    )
}



