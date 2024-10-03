import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  // useState declarations
  const [state, setState] = useState('sign up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // submit handler
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Corrected preventDefault
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Name:', name);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {state === 'sign up' ? 'Create Account' : 'Login'}
        </h2>
        <p className="text-gray-500 mb-6">
          {state === 'sign up' ? 'Please sign up to book an appointment' : 'Please login to book an appointment'}
        </p>
        
        {/* Form submission */}
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email} // Bind state value to input
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password} // Bind state value to input
              onChange={(e) => setPassword(e.target.value)} // Update state on input change
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {state === 'sign up' && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name} // Bind state value to input
                onChange={(e) => setName(e.target.value)} // Update state on input change
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
            >
              {state === 'sign up' ? 'Sign Up' : 'Login'}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-gray-500 text-sm">
          {state === 'sign up' ? (
            <>
              Already have an account?{' '}
              <NavLink to="/login" className="text-blue-600 hover:text-blue-800" onClick={() => setState('Login')}>
                Login here
              </NavLink>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <NavLink to="/Login" className="text-blue-600 hover:text-blue-800" onClick={() => setState('sign up')}>
                Sign up here
              </NavLink>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
