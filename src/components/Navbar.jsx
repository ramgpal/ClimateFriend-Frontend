import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-red-600">Climate Friend</span>
          </NavLink>
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive 
                  ? "font-bold text-red-600 underline underline-offset-4" 
                  : "text-gray-800 hover:text-red-600"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/guide" 
              className={({isActive}) => 
                isActive 
                  ? "font-bold text-red-600 underline underline-offset-4" 
                  : "text-gray-800 hover:text-red-600"
              }
            >
              Guide
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                isActive 
                  ? "font-bold text-red-600 underline underline-offset-4" 
                  : "text-gray-800 hover:text-red-600"
              }
            >
              Contact Us
            </NavLink>
            <NavLink 
              to="/try-now" 
              className={({isActive}) => 
                isActive 
                  ? "font-bold text-red-600 underline underline-offset-4" 
                  : "text-gray-800 hover:text-red-600"
              }
            >
              Try Now
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;