import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { UserCircle } from 'lucide-react';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  // Toggle popup
  const togglePopup = () => setShowPopup(prev => !prev);

  // Close popup on outside click
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

  return (
    <nav className="flex justify-between items-center px-6 py-4 backdrop-blur-xl bg-white/5 border border-white/5 shadow-2xl text-emerald-400 fixed top-0 left-0 w-full z-50 rounded-md">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold hover:text-emerald-700 transition-colors duration-200">
        EDD
      </Link>

      {/* User Icon */}
      <div className="relative">
        <button
          onClick={togglePopup}
          className="text-2xl focus:outline-none hover:scale-105 transition-transform duration-200"
        >
          <UserCircle size={28} strokeWidth={1.8} />
        </button>

        {/* Popup */}
        {showPopup && (
          <div
            ref={popupRef}
            className="absolute right-0 mt-2 w-40 bg-emerald-400 text-black shadow-lg z-10 animate-fade-in rounded-sm"
          >
            <Link
              to="/register"
              className="block px-4 py-2 hover:bg-gray-900 hover:text-emerald-400 transition-colors duration-150 border-b rounded-sm"
              onClick={() => setShowPopup(false)}
            >
              Register
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 hover:bg-gray-900 hover:text-emerald-400 transition-colors duration-150 rounded-sm"
              onClick={() => setShowPopup(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
