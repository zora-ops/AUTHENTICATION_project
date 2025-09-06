import UserStatusIndicator from "./UserStatusIndicator";
import { Home, Menu } from 'lucide-react'
import {Link} from 'react-router'

const Navbar = ({ isLoggedIn, user }) => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center mr-3 group-hover:scale-105 transition-transform duration-200 shadow-md">
                <Link to='/' ><Home className="w-6 h-6 text-white" /></Link>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                  Auth
                </h1>
              </div>
            </div>
          </div>


          {/* Right side - User Status & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <UserStatusIndicator isLoggedIn={isLoggedIn} user={user} />
            
            {/* Mobile menu button */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;