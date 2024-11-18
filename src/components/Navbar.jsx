import { useState } from 'react';
import { Home, ShoppingCart, Phone, Info, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavLinks = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'Shop', href: '#', icon: ShoppingCart },
    { name: 'Contact', href: '#', icon: Phone },
    { name: 'About', href: '#', icon: Info }
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <svg 
                className="h-8 w-8 text-white mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 01-4.305-4.305l-.477-2.387a2 2 0 00-.547-1.022L6 5.354V9a1 1 0 001 1h3.646l-1.643-1.643a1 1 0 111.414-1.414L11 7.586V11a1 1 0 001 1h3.646l-1.643-1.643a1 1 0 111.414-1.414L15 9.586V13a1 1 0 001 1h3.646l-1.643-1.643a1 1 0 111.414-1.414l2.987 2.987a2 2 0 01.547 1.022l.477 2.387a6 6 0 01-4.305 4.305l-2.387.477a2 2 0 00-1.022.547l-1.643 1.643a2 2 0 01-2.828 0l-1.643-1.643a2 2 0 00-1.022-.547l-2.387-.477A6 6 0 015.354 15.43l-.477-2.387a2 2 0 00-.547-1.022L2.354 9.646a2 2 0 010-2.828l1.643-1.643a2 2 0 00.547-1.022l.477-2.387a6 6 0 014.305-4.305l2.387-.477a2 2 0 001.022-.547l1.643-1.643a2 2 0 012.828 0l1.643 1.643a2 2 0 001.022.547l2.387.477A6 6 0 0118.646 4.57l.477 2.387a2 2 0 00.547 1.022l1.643 1.643a2 2 0 010 2.828l-1.643 1.643a2 2 0 00-.547 1.022l-.477 2.387a6 6 0 01-4.305 4.305l-2.387.477a2 2 0 00-1.022.547l-1.643 1.643a2 2 0 01-2.828 0z" 
                />
              </svg>
              <span className="text-2xl font-bold text-white">Product Gallery</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:ml-6 space-x-4">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </a>
            ))}

            {/* Cart Icon */}
            <div className="relative">
              <a 
                href="#" 
                className="text-white hover:text-gray-200 transition-colors duration-300"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  3
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none focus:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-sm rounded-lg">
              {NavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:bg-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-all duration-300"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;