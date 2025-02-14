import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Enterprise Expense Management
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Streamline your expense tracking and management with our powerful and
          intuitive system.
        </p>

        <div className="flex flex-col space-y-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Employee Login
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Manager Login
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Admin Login
          </button>
        </div>

        <p className="text-gray-500 text-center mt-8 text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
