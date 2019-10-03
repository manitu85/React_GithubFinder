import React from 'react'
import { FaGithub, FaHome, FaQuestionCircle }from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = ({title}) => (
    <nav className='navbar bg-primary'>
      <h1><FaGithub /> {title}</h1>
      <ul>
        <li><Link to='/'><FaHome />  Home</Link></li>
        <li><Link to='/About'><FaQuestionCircle />  About</Link></li>
      </ul>
    </nav>
  )


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
