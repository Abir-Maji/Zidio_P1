import React from 'react';
import logo from "../assets/logo.svg";

const LandingPage = () => {
  return (
    <div className="font-inter bg-gradient-to-r from-indigo-50 to-blue-100 min-h-screen flex flex-col">

      {/* Navigation Bar */}
      <nav className="backdrop-blur-md bg-white/70 p-4 shadow-md transition duration-300 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="\" className="text-2xl font-bold text-indigo-600">Enterprise Expense Management System  </a>
          
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-full overflow-hidden bg-gradient-to-r from-indigo-200/50 to-blue-200/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-800/50"></div>
        <div className="container mx-auto py-16 px-6 md:px-0 flex flex-col md:flex-row items-center justify-between relative z-10 text-white">
          <div className="md:w-1/2 animate__animated animate__fadeInLeft">
            <h1 className="text-6xl font-extrabold leading-tight mb-4 tracking-tight">Expense Management, Simplified.</h1>
            <p className="text-xl mb-8 leading-relaxed">Take control of your spending with our powerful and intuitive system.</p>
            {/* <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-xl font-medium">Employee Login</button>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-xl font-medium">Manager Login</button>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition duration-300 text-xl font-medium">Admin Login</button> */}
          </div>
          <div className="content-center">
            <img src={logo} alt="Expense Management" className="w-135 h-auto" />
          </div>
        </div>
      </section>

      {/* Login Buttons Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Login</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 text-xl font-medium">Employee Login</button>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 text-xl font-medium">Admin Login</button>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300 text-xl font-medium">Manager Login</button>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer className="sticky bottom-0 bg-indigo-800 py-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} EEMS. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default LandingPage;
