// import React, { useState } from 'react'

// const Myprofile = () => {
//     const [userData, setUserData] = useState ({
//         name: 'None',
//         email: 'default@gmail.com',
//         phone: '66718822',
//         address: {
//             line1: "c899, sec 59",
//             line2: "Noida"
//         },
//         gender: 'Male',
//         DOB: "2000-01-19"

//     })

//     const [isEdit, setIsedit] = useState(false)

//   return (
//     <div>
//         {
//             isEdit 
//             ? <input type='text'></input>
//             :<p>{userData.name}</p> 
//         }
//     </div>
//   )
// }

// export default Myprofile

import React, { useState } from 'react';

const MyProfile = () => {
  // Define state for the profile data and edit mode
  const [userData, setUserData] = useState({
    name: 'Default Name',
    email: 'default@gmail.com',
    phone: '+1 123 456 7890',
    address: '57th Cross, Richmond Circle, Church Road, London',
    gender: 'Male',
    DOB: '2024-07-20',
  });

  const [isEdit, setIsEdit] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="flex flex-col items-center py-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
        <div className="flex items-center justify-between mb-6">
          {/* Display profile picture */}
          <div className="flex items-center">
            {/* <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full mr-4"
            /> */}
            {/* <img
              src="https://via.placeholder.com/150/CCCCCC"
              alt="Profile"
              className="w-16 h-16 rounded-full"
            /> */}
          </div>

          <div>
            {/* Display profile name */}
            {isEdit ? (
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="text-3xl font-semibold mb-2 w-full border border-gray-300 p-2 rounded"
              />
            ) : (
              <h2 className="text-3xl font-semibold">{userData.name}</h2>
            )}
          </div>
        </div>

        <hr className="my-6" />

        <div className="mb-6">
          {/* Contact Information */}
          <h3 className="text-lg font-semibold mb-2">CONTACT INFORMATION</h3>
          <div className="text-gray-700">
            <p>Email id: {isEdit ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            ) : (
              <span className="text-blue-500">{userData.email}</span>
            )}</p>

            <p>Phone: {isEdit ? (
              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            ) : (
              <span className="text-blue-500">{userData.phone}</span>
            )}</p>

            <p>Address: {isEdit ? (
              <textarea
                name="address"
                value={userData.address}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            ) : (
              userData.address
            )}</p>
          </div>
        </div>

        <hr className="my-6" />

        {/* Basic Information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">BASIC INFORMATION</h3>
          <div className="text-gray-700">
            <p>Gender: {isEdit ? (
              <input
                type="text"
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            ) : (
              userData.gender
            )}</p>

            <p>Birthday: {isEdit ? (
              <input
                type="date"
                name="DOB"
                value={userData.DOB}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
              />
            ) : (
              new Date(userData.DOB).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
            )}</p>
          </div>
        </div>

        {/* Buttons to edit/save information */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleEdit}
            className="border border-blue-500 text-blue-500 hover:bg-blue-100 font-bold py-2 px-4 rounded"
          >
            {isEdit ? 'Save Information' : 'Edit'}
          </button>
          {isEdit && (
            <button
              onClick={toggleEdit}
              className="border border-blue-500 text-blue-500 hover:bg-blue-100 font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
