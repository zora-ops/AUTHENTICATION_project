import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Mail, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

import api from '../lib/api';
import PasswordInput from './PasswordInput';

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otp, setOtp] = useState('');

  const navigate = useNavigate();

  const handleSubmite = async (e) => {
    e.preventDefault()
    if ([email, newPassword].some(item => !item.trim()) || otp === '') {
      toast.error('All fields are required');
      return
    }
    setEmail('');
    setNewPassword('');
    setOtp('')
    try {
      await api.post('/auth/resetPassword', {
        email,
        newPassword,
        otp
      })
      toast.success("Password changed successfully");
      navigate('/login')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Change Password</h2>
        <form
          onSubmit={handleSubmite}
          className="space-y-5">

          {/* Email */}
          <div className="flex items-center border border-white/30 rounded-md px-3 py-2 bg-white/10 hover:bg-white/20 transition">
            <Mail className="w-5 h-5 text-emerald-400 mr-2" />
            <input
              type="mail"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none bg-transparent text-white placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-white/30 rounded-md px-3 py-2 bg-white/10 hover:bg-white/20 transition">
            <Lock className="w-5 h-5 text-emerald-400 mr-2" />
            <PasswordInput value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </div>

          <div className="flex items-center border border-white/30 rounded-md px-3 py-2 bg-white/10 hover:bg-white/20 transition">
            <Lock className="w-5 h-5 text-emerald-400 mr-2" />
            <input
              type="otp"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full outline-none bg-transparent text-white placeholder:text-gray-400"
            />
          </div>

          {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-400 text-gray-900 py-2 rounded-md hover:bg-emerald-500 transition font-semibold"
            >
              Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;