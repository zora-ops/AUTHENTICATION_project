import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { UserCircle } from 'lucide-react';
import api from '../lib/api';

const Navbar = ({ islogin, data, setData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => setShowPopup(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      islogin.setIsLoggedIn(false);
      setData(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 backdrop-blur-xl bg-white/5 border border-white/5 shadow-2xl text-emerald-400 fixed top-0 left-0 w-full z-50 rounded-md">
      <Link to="/" className="text-xl font-bold hover:text-emerald-700 transition-colors duration-200">
        EDD
      </Link>

      <div className="relative">
        <button
          onClick={togglePopup}
          className="text-2xl focus:outline-none hover:scale-105 transition-transform duration-200"
        >
          <UserCircle size={28} strokeWidth={1.8} />
        </button>

        {showPopup && (
          <div
            ref={popupRef}
            className="absolute right-0 mt-2 w-60 bg-emerald-400 text-black shadow-lg z-10 animate-fade-in rounded-sm"
          >
            {islogin.isLoggedIn ? (
              <div className=" w-full px-4 py-2 text-white font-bold hover:bg-gray-900 hover:text-emerald-400 transition-colors duration-150 border-b rounded-sm">
                {data?.name?.toUpperCase()}
                <p className="text-sm">{data?.email}</p>
              </div>
            ) : (
              <Link
                to="/register"
                className="flex px-4 py-2 text-white font-bold hover:bg-gray-900 hover:text-emerald-400 transition-colors duration-150 border-b rounded-sm"
                onClick={() => setShowPopup(false)}
              >
                Register
              </Link>
            )}

            <button
              className="flex w-full px-4 py-2 text-white font-bold hover:bg-gray-900 hover:text-emerald-400 transition-colors duration-150 rounded-sm"
              onClick={() => {
                setShowPopup(false);
                islogin.isLoggedIn ? handleLogout() : null;
              }}
            >
              {islogin.isLoggedIn ? 'Logout' : (
                <Link to="/login" className="w-full text-left">Login</Link>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
