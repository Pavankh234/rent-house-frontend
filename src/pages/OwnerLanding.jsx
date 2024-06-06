
// // import React, { useState } from 'react';
// // import Logo from "../assets/logo.svg";
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // export default function OwnerLanding() {
// //   const storedOwnerId = localStorage.getItem('owner_id');
// //   const navigate = useNavigate();
// //   const [values, setValues] = useState({
// //     address: '',
// //     rentAmount: '',
// //     occupants: '',
// //     city: '',
// //     contactNumber: '',
// //     propertyType: '',
// //     description: '',
// //     image: '',
// //     owner_id: storedOwnerId || ''
// //   });

// //   const handleChange = (event) => {
// //     setValues({ ...values, [event.target.name]: event.target.value });
// //   };

// //   const handleRemainderClick = () => {
// //     navigate('/ownernotifications');
// //   };

// //   const handleInsightsClick = () => {
// //     navigate('/ownerinsights');
// //   };

// //   const handleProfileClick = () => {
// //     navigate('/ownerprofile');
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     axios.post('http://localhost:4000/ownerlanding', values)
// //       .then((res) => {
// //         if (res.data.redirectToPayment) {
// //           navigate('/ownerpayments');
// //         } else {
// //           console.log("Registered Successfully");
// //           toast.success("Registered Successfully! Please Check Your Profile For Registered Houses.");
// //           setValues({
// //             address: '',
// //             rentAmount: '',
// //             occupants: '',
// //             city: '',
// //             contactNumber: '',
// //             propertyType: '',
// //             description: '',
// //             image: '',
// //             owner_id: storedOwnerId || ''
// //           });
// //         }
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       });
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen">
// //       <div className="absolute top-0 left-0 p-4">
// //         <img className="h-10 w-auto" src={Logo} alt="Your Company" />
// //       </div>

// //       <div className="w-full flex justify-end fixed top-4 right-4 hover:cursor-pointer">
// //         <img
// //           src="insight.png"
// //           alt="Insight Icon"
// //           className="w-10 h-10 text-gray-600 mr-4"
// //           onClick={handleInsightsClick}
// //         />
// //         <img
// //           src="bell.png"
// //           alt="Bell Icon"
// //           className="w-10 h-10 text-gray-600 mr-4"
// //           onClick={handleRemainderClick}
// //         />
// //         <img
// //           src="profileicon.png"
// //           alt="Profile Icon"
// //           className="w-10 h-10 rounded-full"
// //           onClick={handleProfileClick}
// //         />
// //       </div>
// //       <div className="flex flex-col items-center">
// //         <div className="max-w-screen-lg p-10">
// //           <form
// //             className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
// //             onSubmit={handleSubmit}
// //           >
// //             <div className="grid grid-cols-2 gap-4">
// //               {/* Address */}
// //               <div className="mb-4">
// //                 <label
// //                   className="block text-gray-700 text-sm font-bold mb-2"
// //                   htmlFor="address"
// //                 >
// //                   Address
// //                 </label>
// //                 <input
// //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                   id="address"
// //                   type="text"
// //                   placeholder="Address"
// //                   onChange={handleChange}
// //                   value={values.address}
// //                 />
// //               </div>
// //               {/* Rent Amount */}
// //               <div className="mb-4">
// //                 <label
// //                   className="block text-gray-700 text-sm font-bold mb-2"
// //                   htmlFor="rentAmount"
// //                 >
// //                   Rent Amount
// //                 </label>
// //                 <input
// //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                   id="rentAmount"
// //                   type="number"
// //                   placeholder="Rent Amount"
// //                   onChange={handleChange}
// //                   value={values.rentAmount}
// //                 />
// //               </div>
// //               {/* Number of Occupants */}
// //               <div className="mb-4">
// //                 <label
// //                   className="block text-gray-700 text-sm font-bold mb-2"
// //                   htmlFor="occupants"
// //                 >
// //                   Number of Occupants
// //                 </label>
// //                 <input
// //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                   id="occupants"
// //                   type="number"
// //                   placeholder="Number of Occupants"
// //                   onChange={handleChange}
// //                   value={values.occupants}
// //                 />
// //               </div>
// //               {/* City */}
// //               <div className="mb-4">
// //                 <label
// //                   className="block text-gray-700 text-sm font-bold mb-2"
// //                   htmlFor="city"
// //                 >
// //                   City
// //                 </label>
// //                 <input
// //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                   id="city"
// //                   type="text"
// //                   placeholder="City"
// //                   onChange={handleChange}
// //                   value={values.city}
// //                 />
// //               </div>
// //               {/* Contact Number */}
// //               <div className="mb-4">
// //                 <label
// //                   className="block text-gray-700 text-sm font-bold mb-2"
// //                   htmlFor="contactNumber"
// //                 >
// //                   Contact Number
// //                 </label>
// //                 <input
// //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                   id="contactNumber"
// //                   type="tel"
// //                   placeholder="Contact Number"
// //                   onChange={handleChange}
// //                   value={values.contactNumber}
// //                 />
// //               </div>
// //               {/* Property Type */}
// //               <div className="mb-4">
// //                 <label
// //                   className="block text-gray-700 text-sm font-bold mb-2"
// //                   htmlFor="propertyType"
// //                 >
// //                   Property Type
// //                 </label>
// //                 <select
// //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                   id="propertyType"
// //                   onChange={handleChange}
// //                   value={values.propertyType}
// //                 >
// //                   <option value="">Select Property Type</option>
// //                   <option value="1BHK">1BHK</option>
// //                   <option value="2BHK">2BHK</option>
// //                   <option value="3BHK">3BHK</option>
// //                   <option value="Others">Others</option>
// //                 </select>
// //               </div>
// //               {/* Description */}
// //               <div className="mb-4 col-span-2">
// //                 <label
// //                   className="block text-gray-700 text-sm font-bold mb-2"
// //                   htmlFor="description"
// //                 >
// //                   Description
// //                 </label>
// //                 <textarea
// //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                   id="description"
// //                   rows="4"
// //                   placeholder="Description"
// //                   onChange={handleChange}
// //                   value={values.description}
// //                 ></textarea>
// //               </div>
// //               {/* Add Image */}
// //               <div className="mb-4 col-span-2">
// //                 <label
// //                   className="block text-gray-700 text-sm font-bold mb-2"
// //                   htmlFor="image"
// //                 >
// //                   Add Image
// //                 </label>
// //                 <input
// //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //                   id="image"
// //                   type="file"
// //                   onChange={handleChange}
// //                 />
// //               </div>
// //               {/* Owner ID */}
// //               <div className="mb-4 col-span-2">
// //                 <label
// //                   className="block text-gray-700 text-sm font-bold mb-2"
// //                   htmlFor="owner_id"
// //                 >
// //                   Owner ID
// //                 </label>
// //                 <input
// //                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
// //                   id="owner_id"
// //                   type="text"
// //                   readOnly
// //                   value={values.owner_id}
// //                 />
// //               </div>
// //             </div>
// //             {/* Submit Button */}
// //             <div className="flex items-center justify-center">
// //               <button
// //                 className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 type="submit"
// //               >
// //                 Submit
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //       <ToastContainer
// //         position="bottom-right"
// //         autoClose={2000}
// //         hideProgressBar={false}
// //         newestOnTop={false}
// //         closeOnClick
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //         theme="dark"
// //       />
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import Logo from "../assets/logo.svg";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function OwnerLanding() {
//   const storedOwnerId = localStorage.getItem('owner_id');
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     address: '',
//     rentAmount: '',
//     occupants: '',
//     city: '',
//     contactNumber: '',
//     propertyType: '',
//     description: '',
//     image: '',
//     owner_id: storedOwnerId || ''
//   });

//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

//   const handleRemainderClick = () => {
//     navigate('/ownernotifications');
//   };

//   const handleInsightsClick = () => {
//     navigate('/ownerinsights');
//   };

//   const handleProfileClick = () => {
//     navigate('/ownerprofile');
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:4000/ownerlanding', values)
//       .then((res) => {
//         if (res.data.redirectToPayment) {
//           navigate('/ownerpayments');
//         } else {
//           console.log("Registered Successfully");
//           toast.success("Registered Successfully! Please Check Your Profile For Registered Houses.");
//           setValues({
//             address: '',
//             rentAmount: '',
//             occupants: '',
//             city: '',
//             contactNumber: '',
//             propertyType: '',
//             description: '',
//             image: '',
//             owner_id: storedOwnerId || ''
//           });
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen overflow-hidden">
//       <nav className="w-full flex justify-between items-center p-4 bg-indigo-400 shadow-lg fixed top-0 left-0 z-10">
//         <div className="flex items-center">
//           <img className="h-10 w-auto" src={Logo} alt="Your Company" />
//         </div>

//         <div className="flex space-x-4">
//           <img
//             src="insight.png"
//             alt="Insight Icon"
//             className="w-10 h-10 text-gray-200 hover:text-gray-400 cursor-pointer"
//             onClick={handleInsightsClick}
//           />
//           <img
//             src="bell.png"
//             alt="Bell Icon"
//             className="w-10 h-10 text-gray-200 hover:text-gray-400 cursor-pointer"
//             onClick={handleRemainderClick}
//           />
//           <img
//             src="profileicon.png"
//             alt="Profile Icon"
//             className="w-10 h-10 rounded-full cursor-pointer"
//             onClick={handleProfileClick}
//           />
//         </div>
//       </nav>
      
//       <div className="flex-grow max-w-screen-lg w-full mx-auto mt-24 p-4 border border-gray-200 rounded-lg overflow-auto">
//           <div className="flex justify-center mb-0">
//             <p className="text-gray-800 text-lg mb-6 font-bold">Please input the house details below:</p>
//           </div>
//         <form className="bg-white shadow-md rounded px-10 pt-8 pb-10 mb-8" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
//               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address" onChange={handleChange} value={values.address} />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rentAmount">Rent Amount</label>
//               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rentAmount" type="number" placeholder="Rent Amount" onChange={handleChange} value={values.rentAmount} />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occupants">Number of Occupants</label>
//               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="occupants" type="number" placeholder="Number of Occupants" onChange={handleChange} value={values.occupants} />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
//               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City" onChange={handleChange} value={values.city} />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">Contact Number</label>
//               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="tel" placeholder="Contact Number" onChange={handleChange} value={values.contactNumber} />
//             </div>
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyType">Property Type</label>
//               <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="propertyType" onChange={handleChange} value={values.propertyType}>
//                 <option value="">Select Property Type</option>
//                 <option value="1BHK">1BHK</option>
//                 <option value="2BHK">2BHK</option>
//                 <option value="3BHK">3BHK</option>
//                 <option value="Others">Others</option>
//               </select>
//             </div>
//             <div className="col-span-2">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
//               <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" rows="4" placeholder="Description" onChange={handleChange} value={values.description}></textarea>
//             </div>
//             <div className="col-span-2">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Add Image</label>
//               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="file" onChange={handleChange} />
//             </div>
//             <div className="col-span-2">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="owner_id">Owner ID</label>
//               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200" id="owner_id" type="text" readOnly value={values.owner_id} />
//             </div>
//           </div>
//           <div className="flex items-center justify-center mt-8">
//             <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//       <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
//     </div>
//   );
// }


import React, { useState } from 'react';
import Logo from "../assets/logo.svg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function OwnerLanding() {
  const storedOwnerId = localStorage.getItem('owner_id');
  const navigate = useNavigate();
  const [values, setValues] = useState({
    address: '',
    rentAmount: '',
    occupants: '',
    city: '',
    contactNumber: '',
    propertyType: '',
    description: '',
    image: '',
    owner_id: storedOwnerId || ''
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleRemainderClick = () => {
    navigate('/ownernotifications');
  };

  const handleInsightsClick = () => {
    navigate('/ownerinsights');
  };

  const handleProfileClick = () => {
    navigate('/ownerprofile');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/ownerlanding', values)
      .then((res) => {
        if (res.data.redirectToPayment) {
          navigate('/ownerpayments');
        } else {
          console.log("Registered Successfully");
          toast.success("Registered Successfully! Please Check Your Profile For Registered Houses.");
          setValues({
            address: '',
            rentAmount: '',
            occupants: '',
            city: '',
            contactNumber: '',
            propertyType: '',
            description: '',
            image: '',
            owner_id: storedOwnerId || ''
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden">
      <nav className="w-full flex justify-between items-center p-4 bg-indigo-400 shadow-lg fixed top-0 left-0 z-10">
        <div className="flex items-center">
          <img className="h-10 w-auto" src={Logo} alt="Your Company" />
        </div>

        <div className="flex space-x-4">
          <img
            src="insight.png"
            alt="Insight Icon"
            className="w-10 h-10 text-gray-200 hover:text-gray-400 cursor-pointer"
            onClick={handleInsightsClick}
          />
          <img
            src="bell.png"
            alt="Bell Icon"
            className="w-10 h-10 text-gray-200 hover:text-gray-400 cursor-pointer"
            onClick={handleRemainderClick}
          />
          <img
            src="profileicon.png"
            alt="Profile Icon"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={handleProfileClick}
          />
        </div>
      </nav>
      
      <div className="flex-grow max-w-screen-lg w-full mx-auto mt-24 p-4 border border-gray-200 rounded-lg overflow-auto">
          <div className="flex justify-center mb-0">
            <p className="text-gray-800 text-lg mb-6 font-bold">Please input the house details below:</p>
          </div>
        <form className="bg-white shadow-md rounded px-10 pt-8 pb-10 mb-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" name="address" type="text" placeholder="Address" onChange={handleChange} value={values.address} />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rentAmount">Rent Amount</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rentAmount" name="rentAmount" type="number" placeholder="Rent Amount" onChange={handleChange} value={values.rentAmount} />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="occupants">Number of Occupants</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="occupants" name="occupants" type="number" placeholder="Number of Occupants" onChange={handleChange} value={values.occupants} />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" name="city" type="text" placeholder="City" onChange={handleChange} value={values.city} />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">Contact Number</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" name="contactNumber" type="tel" placeholder="Contact Number" onChange={handleChange} value={values.contactNumber} />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyType">Property Type</label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="propertyType" name="propertyType" onChange={handleChange} value={values.propertyType}>
                <option value="">Select Property Type</option>
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name="description" rows="4" placeholder="Description" onChange={handleChange} value={values.description}></textarea>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Add Image</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" name="image" type="file" onChange={handleChange} />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="owner_id">Owner ID</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200" id="owner_id" name="owner_id" type="text" readOnly value={values.owner_id} />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </div>
  );
}
