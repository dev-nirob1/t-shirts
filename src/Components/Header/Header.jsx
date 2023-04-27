import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='space-x-3 px-5 h-14 flex items-center text-white justify-between  font-semibold bg-stone-500'>
            <h2 className='text-4xl'>T-Shirts</h2>
            <div className='space-x-5 '>
            <Link to="/">Home</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Header;