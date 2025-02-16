import React from "react";
import { Link, NavLink } from "react-router-dom";
// import RequestDemo from "../RequestDemo";

const NavbarNew = () => {
  return (
    <nav className='text-[1.5rem] bg-gradient flex justify-between items-center sticky top-0 z-50 px-4 sm:px-6 lg:px-[4rem] h-[60px]'>
      {/* Logo Section */}
      <NavLink to={"/business"} className='flex-shrink-0'>
        <img src='/freudiaLogo.png' alt='LOGO' className='lg:h-20 sm:h-16 w-auto' />
      </NavLink>

      {/* Links Section */}
      <div className='hidden md:flex items-center space-x-4'>
        <NavLink
          to={"/business/otherorganization"}
          className='text-black hover:text-gray-700 font-medium'
        >
          Other Organization
        </NavLink>
        <NavLink
          to={"/login"}
          className='text-black hover:text-gray-700 font-medium'
        >
          Login
        </NavLink>
        {/* <RequestDemo source='NAVBAR' /> */}
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <MobileMenu />
      </div>
    </nav>
  );
};

/* Mobile Menu Component */
const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        className='text-black hover:text-gray-700 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute top-full right-0 bg-white shadow-md rounded-lg py-2 w-48 mt-2 z-20'>
          <NavLink
            to={"/business/otherorganization"}
            className='block px-4 py-2 text-black hover:bg-gray-200'
            onClick={() => setIsOpen(false)}
          >
            Other Organization
          </NavLink>
          <NavLink
            to={"/login"}
            className='block px-4 py-2 text-black hover:bg-gray-200'
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <div className='px-4 py-2'>
            <RequestDemo source='NAVBAR' />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarNew;
