import React from 'react'
import { FaGithub }from 'react-icons/fa'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navbar = ({title}) => (
    <nav className='navbar bg-primary'>
      <h1><FaGithub /> {title}</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
      </ul>
    </nav>
  )


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
