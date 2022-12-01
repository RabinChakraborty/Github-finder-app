import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = ({ tittle }) => {
  return (
    <>
      <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className='container mx-auto'>
          <div className='flex-none px-2 mx-2'>
            <FaGithub className='inline pr-2 text-3xl' />
            <Link rel='stylesheet' to='/' className='text-lg font-bold'>
              {tittle}
            </Link>
          </div>
          <div className='flex-1 px-2 mx-2'>
            <div className='flex justify-end'>
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                Home
              </Link>
              <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.defaultProps = {
  tittle: ' Github Finder',
};

Navbar.ProtoTypes = {
  tittle: PropTypes.string,
};

export default Navbar;
