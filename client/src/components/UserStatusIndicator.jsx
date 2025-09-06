import React, { useState } from 'react';
import { User, Home, Menu, X } from 'lucide-react';

// User Status Component with Hover Tooltip
const UserStatusIndicator = ({ isLoggedIn, user }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div
        className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <User className="w-5 h-5 text-white" />
      </div>
      
      {showTooltip && (
        <div
          className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-xl p-3 min-w-56 z-50 animate-fadeIn"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {isLoggedIn ? (
            <div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-800">Logged In</span>
              </div>
              <div className="text-sm text-gray-600 mb-1">
                <strong>Name:</strong> {user?.name || 'John Doe'}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Email:</strong> {user?.email || 'john@example.com'}
              </div>
              <div className="text-xs text-gray-500">
                Last login: Today at 2:30 PM
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-800">Not Logged In</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Please log in to access your account
              </div>
              <button className="w-full bg-blue-500 text-white text-xs py-1 px-2 rounded hover:bg-blue-600 transition-colors">
                Sign In
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserStatusIndicator