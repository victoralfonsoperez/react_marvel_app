import React from 'react'
import PropTypes from 'prop-types'

const Image = props => (
  <img
    src={`${props.path}.${props.extension}`}
    alt={props.title || ''}
    className={props.className || ''}
  />
)

Image.propTypes = {
  path: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
}

export default Image
