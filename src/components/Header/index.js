import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../../common/constant';

const Header=()=>{
    return (
      <div className="flex justify-between shadow-xl rounded-lg bg-black text-white mb-16">
        <div>
          <img className="ml-8 w-32 rounded-full" alt="logo" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
          <ul className="flex px-5 m-2 text-xl">
            <li className='px-7'><Link to='/'>Home</Link></li>
            <li className='px-7'><Link to='/about'>About us</Link></li>
            <li className='px-7'>Contact Us</li>
            <li className='px-7'>Cart</li>
          </ul>
  
        </div>
        
      </div>
    );
};

export default Header;