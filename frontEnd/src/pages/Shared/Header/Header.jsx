import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto'>
            <Link to="/" className='p-4 text-white bg-gray-500 underline'> Home</Link>
        </div>
    );
};

export default Header;