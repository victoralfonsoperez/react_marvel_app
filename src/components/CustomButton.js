import React from 'react'
import PropTypes from 'prop-types'
import './CustomButton.css'

const CustomButton = (props) => {
  if (props.price) {
    return (
      <button
        disabled={props.price === 0}
        className={props.className || ''}
      >
        {props.text} {`${props.price}`}
      </button>
    )
  }
  return (
    <button
      className={props.className || ''}
    >
      {props.text}
    </button>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
}

export default CustomButton
