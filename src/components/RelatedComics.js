import React, { Component, Fragment } from 'react'
import './RelatedComics.css'

class RelatedComics extends Component {
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
              <li key={item.name}>{item.name}</li>
            ))
          }
        </ul>
      </Fragment>
    )
  }
}

export default RelatedComics
