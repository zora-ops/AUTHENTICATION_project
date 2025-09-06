import { useState } from 'react'
import Navbar from '../components/Navbar'



const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change to false to see "Not Logged In" state
  
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Toggle Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 text-sm font-medium"
        >
          Toggle Login Status
        </button>
      </div>
    </div>
  );
};

export default HomePage;