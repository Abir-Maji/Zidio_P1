import React, { useState } from "react";

const Table = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <h1 className="mt-8 mb-8 text-center text-2xl font-semibold">Manager Dashboard</h1>

            <div className="w-5/6 mt-6 mx-auto flex flex-col overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Name</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Type of Expense</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Amount</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Document</th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 border-b border-blue-gray-50">John Michael</td>
                            <td className="p-4 border-b border-blue-gray-50">Travel</td>
                            <td className="p-4 border-b border-blue-gray-50">10000</td>
                            <td className="p-4 border-b border-blue-gray-50">pic.jpg</td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <button onClick={openModal} className="text-blue-500 font-medium hover:underline">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-300 transform transition-transform scale-95 opacity-0 animate-fadeIn">
                        <h2 className="text-xl font-semibold mb-4">Approve/Decline Expense</h2>

                        <label className="block text-sm font-medium">Name</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" defaultValue="John Michael" />

                        <label className="block text-sm font-medium">Type of Expense</label>
                        <input type="text" className="w-full border p-2 rounded mb-3" defaultValue="Travel" />

                        <label className="block text-sm font-medium">Amount</label>
                        <input type="number" className="w-full border p-2 rounded mb-3" defaultValue="10000" />

                        <select id="action" class="bg-gray-50 border border-gray-300 text- text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 white:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Take Action</option>
                            <option value="AP">Approve</option>
                            <option value="DE">Decline</option>
                        </select>


                        <div className="flex justify-end space-x-2 mt-6">
                            <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition">
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Tailwind animation */}
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}
            </style>
        </>
    );
};

export default Table;
