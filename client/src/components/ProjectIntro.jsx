import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Hand } from 'lucide-react';

import api from '../lib/api';

const ProjectIntro = ({ data }) => {
  const navigate = useNavigate();

  const handleVerify = async () => {
    
    try {
      await api.post('/auth/send-verify-otp')
      navigate('/verify-account')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
      <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-10 max-w-xl w-full text-center shadow-2xl text-white animate-fade-in">
        {/* Greeting */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <h1 className="text-4xl font-bold tracking-wide">
            Hi {data?.name ?? <span className="animate-pulse text-gray-400">...</span>}
          </h1>

          <Hand className="text-emerald-400 animate-wave" size={32} strokeWidth={2} />
        </div>
        {/* Is verivied */}
        {data && !data.isAccountVerified &&<div>
          <button
          className='border border-emerald-400  text-emerald-400 rounded-b-xl px-2 py-2 font-bold'
          onClick={handleVerify}
          >Verify email</button> 
        </div>
        }

        {
          data?.isAccountVerified ? 
          <div 
          className='text-emerald-400 rounded-sm p-2 font-bold'
          >Verified</div> 
          : null
        }


        {/* Description */}
        <p className="text-lg leading-relaxed mb-6 text-gray-200">
          This is a <span className="text-emerald-400 font-semibold">Basic Auth App</span> designed to demonstrate secure user authentication with a clean UI and modular backend. It’s built for clarity, scalability, and developer joy.
        </p>

        {/* Tech Stack */}
        <p className="text-md leading-relaxed text-gray-300">
          Built using <span className="text-emerald-400 font-medium">React.js</span>, <span className="text-emerald-400 font-medium">Express.js</span>, <span className="text-emerald-400 font-medium">Tailwind CSS</span>, <span className="text-emerald-400 font-medium">MongoDB</span>, and <span className="text-emerald-400 font-medium">Mongoose</span>.
          Development tools include <span className="text-emerald-300 font-medium">CORS</span>, <span className="text-emerald-300 font-medium">Nodemon</span>, <span className="text-emerald-300 font-medium">React Router</span>, <span className="text-emerald-300 font-medium">Lucide React</span>, and <span className="text-emerald-300 font-medium">React Toastify</span>.
        </p>
      </div>
    </div>
  );
};

export default ProjectIntro;