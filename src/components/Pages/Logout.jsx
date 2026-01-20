import React from 'react'

// function Logout() {

  // src/Logout.js

const Logout = ({ onLogout }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                <h2 className="text-2xl font-bold mb-6">Welcome!</h2>
                <button 
                    onClick={onLogout}
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Logout;
