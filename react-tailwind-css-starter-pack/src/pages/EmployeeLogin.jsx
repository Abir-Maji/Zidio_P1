import React, { useState } from 'react';
import login from "../assets/login.svg"

const EmployeeLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (you should add more robust validation)
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    // Here you would typically make an API call to authenticate the user
    // For this example, we'll just simulate a successful login
    if (username === 'testuser' && password === 'password') {
      // Redirect to the desired page after successful login
      console.log('Login successful!');
      // Example: window.location.href = '/dashboard';
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8  ">
        <img src={login} alt="Expense Management" className="w-135 h-auto" />
      </div>
      <div className="bg-white p-8 w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Employee Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLoginPage;