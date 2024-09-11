import React from 'react';

export const LoginRegister = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        {/* Login Form */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Bookmee</h4>
          <h5> Login/Register</h5>
          <div className="mb-4">
            <label htmlFor="login-email" className="block text-gray-700">Email</label>
            <input type="email" id="login-email" placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded mt-1"/>
          </div>
          <div className="mb-4">
            <label htmlFor="login-password" className="block text-gray-700">Password</label>
            <input type="password" id="login-password" placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded mt-1"/>
          </div>
          <button type="submit" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Login
          </button>
        </div>

        {/* Register Form */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Register</h4>
          <div className="mb-4">
            <label htmlFor="register-first-name" className="block text-gray-700">First Name</label>
            <input type="text" id="register-first-name" placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded mt-1"/>
          </div>
          <div className="mb-4">
            <label htmlFor="register-last-name" className="block text-gray-700">Last Name</label>
            <input type="text" id="register-last-name" placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded mt-1"/>
          </div>
          <div className="mb-4">
            <label htmlFor="register-email" className="block text-gray-700">Email</label>
            <input type="email" id="register-email" placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded mt-1"/>
          </div>
          <div className="mb-4">
            <label htmlFor="register-password" className="block text-gray-700">Password</label>
            <input type="password" id="register-password" placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded mt-1"/>
          </div>
          <div className="mb-4">
            <label htmlFor="register-confirm-password" className="block text-gray-700">Confirm Password</label>
            <input type="password" id="register-confirm-password" placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded mt-1"/>
          </div>
          <button type="submit" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Register
          </button>
        </div>
      </div>
    </div>
  );
};
