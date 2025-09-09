import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../lib/api';

import { Mail } from 'lucide-react';
import toast from 'react-hot-toast'

const VerifyOtp = () => {

      const [email, setEmail] = useState('');


    const navigate = useNavigate();

    const handleSubmite = async (e) => {
        e.preventDefault()
        if (!email.trim()) {
            toast.error('All fields are required');
            return
        }
        setEmail('');
        console.log(email)

        try {
            await api.post('/auth/resetotp', {
                email
            })
            toast.success("user Login successfully");
            navigate('/change-password')
        } catch (error) {
            toast.error("Login failed try again");
            console.log(error);
        }

    }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Verify Otp</h2>
        <form 
        onSubmit={handleSubmite}
        className="space-y-5">

          {/* Email */}
          <div className="flex items-center border border-white/30 rounded-md px-3 py-2 bg-white/10 hover:bg-white/20 transition">
            <Mail className="w-5 h-5 text-emerald-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none bg-transparent text-white placeholder:text-gray-400"
            />
          </div>

          {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-400 text-gray-900 py-2 rounded-b-xl hover:bg-emerald-500 transition font-semibold"
            >
              Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;