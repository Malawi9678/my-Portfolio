import logo from '../assets/yashLogo2.png';
import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-10 flex items-center justify-between py-3'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-10 w-16' src={logo} alt='logo' />
        </div>
        <div className='m-1 flex items-center justify-center gap-3 text-1xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaSquareXTwitter/>
        </div>
    </nav>
  )
}

export default Navbar