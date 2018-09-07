import React from 'react'

import PropTypes from 'prop-types'


const Header= (props) => {
  const {branding} =props;
  return (
    <nav className='navbar 
    navbar-expand-sm navbar-dark bg-danger md-3 py-0'>
    <div className="container">
        <a href="/" className='navbar-brand'>{branding}</a>
    </div>
    <ul className="navbar-nav mr-auto">
    <li className="nv-item">
    <a href="/" className="nav-lin">
    Home
    </a>
    </li>

    </ul>
    </nav>
    // <div>
    //   <h1 style={{color:'red' , fontSize:'50px'}} >{props.branding}</h1>
    // </div>
  )
}
Header.defaultProps={
  branding:'My App'
}

Header.prototype={
  branding:PropTypes.string.isRequired
}
export default  Header
