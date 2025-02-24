import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'; // Heroicons v2

const EmployeeDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('default'); // State for active content

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddExpenseClick = () => {
    setActiveContent('addExpense');
  };

  const handleViewExpenseClick = () => {
    setActiveContent('viewExpenses');
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'addExpense':
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Add New Expense</h2>
            <form>
              {/* Your form fields */}
              <input type="text" placeholder="Description" className="border rounded px-3 py-2 mb-2 w-full" />
              <input type="number" placeholder="Amount" className="border rounded px-3 py-2 mb-2 w-full" />
              {/* ... other form fields ... */}
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
              <button
                type="button"
                onClick={() => setActiveContent('default')} // Close form
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Cancel
              </button>
            </form>
          </div>
        );
      case 'viewExpenses':
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Expense Details</h2>
            {/* Add your expense details here */}
            <h3>Description: Example Description</h3>
            <h3>Amount: $100.00</h3>
            <button
              type="button"
              onClick={() => setActiveContent('default')} // Close details
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Close
            </button>
          </div>
        );
      default: // 'default'
        return (
          <div> {/* Default content */}
            <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
            <p>This is where the main content of your page will be displayed.</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      {/* Navbar */}
      <div className="bg-red-400 shadow-md rounded-xl w-full px-4 py-2 mx-auto">
        <div className="container mx-auto flex flex-wrap items-center">
          <a href="#" className="text-3xl font-semibold text-slate-800 py-1.5">
            Enterprise Expense Management System
          </a>
          <button className="text-slate-800 md:hidden ml-auto" onClick={toggleSidebar}>
            {isSidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className="flex-grow flex">
        {/* Sidebar */}
        <aside
          className={`w-60 bg-white p-11 transition-transform duration-300 shadow-md rounded-xl mt-2 fixed top-16 left-0 h-[calc(100vh-4rem)] z-10 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:static`}
        >
          <div className="mb-6">
            <h2 className="font-bold text-lg text-gray-700 mb-3">Dashboard</h2>
            <ul className="text-gray-600">
              <li>
                <button onClick={handleAddExpenseClick} className="block py-2 hover:bg-gray-100 rounded w-full text-left">
                  Add Expense
                </button>
              </li>
              <li>
                <button onClick={handleViewExpenseClick} className="block py-2 hover:bg-gray-100 rounded w-full text-left">
                  View Expenses
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:ml-2 md:mt-2 bg-white rounded-xl">
          {renderContent()} {/* Call the renderContent function */}
        </main>
      </div>
    </div>
  );
};

export default EmployeeDashboard;