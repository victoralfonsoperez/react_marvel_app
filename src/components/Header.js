import React, { Component } from 'react'
import { FaSearch } from 'react-icons/lib/fa'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="logo">LOGO</div>
        <div className="search-container">
          <input className="search" type="text" placeholder="Search Character" />
          <FaSearch className="search-icon" />
        </div>
      </div>
    )
  }
}

export default Header
