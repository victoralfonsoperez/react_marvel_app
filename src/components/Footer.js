import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Footer.css'

class Footer extends Component {
  render() {
    const { copyright } = this.props
    return (
      <div className="footer">{copyright}</div>
    )
  }
}

const mapStateToProps = ({ characters }) => (
  {
    copyright: characters && characters.copyright,
  }
)

Footer.defaultProps = {
  copyright: '@2018 Marvel',
}

Footer.propTypes = {
  copyright: PropTypes.string,
}

export default connect(mapStateToProps)(Footer)
