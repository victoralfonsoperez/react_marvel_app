import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { FaSearch } from 'react-icons/lib/fa'
import './Header.css'
import { autocompleteList } from '../utils/api'
import * as actions from '../actions'

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
      .then(characters => this.props.fetchCharacters(characters, true))
  }

  render() {
    return (
      <div className="app-header">
        <div className="logo">LOGO</div>
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
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

Header.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
}

const mapStateToProps = ({ characters }) => (
  {
    copyright: characters && characters.copyright,
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
