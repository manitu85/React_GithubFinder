import React from 'react'
import { FaGithub }from 'react-icons/fa'
import PropTypes from 'prop-types'


const Navbar = ({title}) => (
    <nav className='navbar bg-primary'>
      <h1><FaGithub /> {title}</h1>
      {/* <ul>
        <li>Home</li>
        <li>About</li>
      </ul> */}
    </nav>
  )


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
