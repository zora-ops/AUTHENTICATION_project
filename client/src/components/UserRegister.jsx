import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { User, Mail, Lock } from 'lucide-react';
import { toast } from 'react-hot-toast';

import api from '../lib/api'

import PasswordInput from '../components/PasswordInput'


const RegisterForm = () => {
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmite = async (e) => {
    e.preventDefault()
    if ([name, email, password].some(item => !item.trim())) {
      toast.error('All fields are required');
      return
    }
    setUserName('');
    setEmail('');
    setPassword('');
    console.log(name, email, password)

    try {
      await api.post('/auth/register', {
        name,
        email,
        password
      })
      toast.success("user registered successfully");
      navigate('/login')
    } catch (error) {
      console.log(error.message)
    }

  }





  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-xl shadow-2xl p-8 w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Create Account</h2>
        <form
          onSubmit={handleSubmite}
          className="space-y-5">
          {/* Username */}
          <div className="flex items-center border border-white/30 rounded-md px-3 py-2 bg-white/10 hover:bg-white/20 transition">
            <User className="w-5 h-5 text-emerald-400 mr-2" />
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full outline-none bg-transparent text-white placeholder:text-gray-400"
            />
          </div>


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

          {/* Password */}
          <div className="flex items-center border border-white/30 rounded-md px-3 py-2 bg-white/10 hover:bg-white/20 transition">
            <Lock className="w-5 h-5 text-emerald-400 mr-2" />
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-400 text-gray-900 py-2 rounded-md hover:bg-emerald-500 transition font-semibold"
          >
            Register
          </button>
          <Link to={'/login'}>
            <div className='flex justify-end text-emerald-400 hover:text-blue-600 transition'>
              <p>already have an account? Login</p>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
