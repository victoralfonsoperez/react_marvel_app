import React from 'react'
import PropTypes from 'prop-types'

function SectionHeading(props) {
  return (
    <div className="section-heading">
      <img className="sectionLogo" src={props.imageSrc} alt="" />
      <h1>{props.title}</h1>
    </div>
  )
}

SectionHeading.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SectionHeading
