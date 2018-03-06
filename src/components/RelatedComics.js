import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import './RelatedComics.css'
import { fetchData } from '../utils/api'

class RelatedComics extends Component {
  getRelatedComics = (event) => {
    event.preventDefault()

    if (event.target.href) {
      fetchData(event.target.href)
        .then(related => this.props.fetchRelatedComics(related.data.results, true))
    }
  }

  render() {
    const { comics } = this.props
    return (
      <Fragment>
        <h4>
          {
            comics && comics.items.length > 0 ? 'Related Comics' : 'This character has no related comics'
          }
        </h4>
        <ul className="related-comics">
          {
            comics && comics.items && comics.items.splice(0, 4).map(item => (
              <li key={item.name}>
                <a className="no-link" href={item.resourceURI} onClick={this.getRelatedComics}>{item.name}</a>
              </li>
            ))
          }
        </ul>
      </Fragment>
    )
  }
}

RelatedComics.propTypes = {
  comics: PropTypes.object.isRequired,
  fetchRelatedComics: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(null, mapDispatchToProps)(RelatedComics)
