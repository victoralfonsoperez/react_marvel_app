import React, { Component } from 'react'
import { FaSearch } from 'react-icons/lib/fa'
import './Header.css'
import { autocompleteList } from '../utils/api'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    autocompleteList(this.state.value)
      .then(data => console.log(data))
      // set the response as a new state
  }

  render() {
    return (
      <div className="app-header">
        <div className="logo">LOGO</div>
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            {/* TODO: create a form to handle the data sumbit */}
            <input
              className="search"
              type="text"
              placeholder="Search Character"
              onChange={this.handleChange}
            />
            <button className="search-icon">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Header
