import { User, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router';

const ChangePassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Change Password</h2>
        <form className="space-y-5">

          {/* Email */}
          <div className="flex items-center border border-white/30 rounded-md px-3 py-2 bg-white/10 hover:bg-white/20 transition">
            <Mail className="w-5 h-5 text-emerald-400 mr-2" />
            <input
              type="password"
              placeholder="New Password"
              className="w-full outline-none bg-transparent text-white placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-white/30 rounded-md px-3 py-2 bg-white/10 hover:bg-white/20 transition">
            <Lock className="w-5 h-5 text-emerald-400 mr-2" />
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="w-full outline-none bg-transparent text-white placeholder:text-gray-400"
            />
          </div>

          {/* Submit Button */}
          <Link>
            <button
              type="submit"
              className="w-full bg-emerald-400 text-gray-900 py-2 rounded-md hover:bg-emerald-500 transition font-semibold"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;