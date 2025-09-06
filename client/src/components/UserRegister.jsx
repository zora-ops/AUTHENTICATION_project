// RegisterForm.jsx
import { User, Mail, Lock } from "lucide-react";

export default function RegisterForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form className="space-y-5">
          {/* Username */}
          <div className="flex items-center border rounded-md px-3 py-2">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none bg-transparent"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-md px-3 py-2">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none bg-transparent"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-md px-3 py-2">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none bg-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}