import { useState } from "react";
import { Smile, User, LogOut } from "lucide-react";

export default function HeroPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate auth
  const userName = "Abhishek"; // Replace with dynamic user data

  const handleLogout = () => {
    console.log("User logged out");
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center border border-gray-300">
        <div className="flex justify-center mb-4">
          {isLoggedIn ? (
            <User className="w-8 h-8 text-blue-600" />
          ) : (
            <Smile className="w-8 h-8 text-green-500" />
          )}
        </div>

        <h1 className="text-2xl font-bold mb-2">
          {isLoggedIn ? `Hey ${userName}` : "Hey fella 👋"}
        </h1>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        )}

        <p className="text-gray-700 leading-relaxed text-sm">
          This authentication page is built using the MERN stack—MongoDB, Express, React, and Node.js.
          It handles secure user login, session management, and dynamic UI rendering based on auth state.
        </p>
      </div>
    </div>
  );
}
