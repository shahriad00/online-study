import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='container text-left header'>
                <a className='item' href="/course">Course</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;