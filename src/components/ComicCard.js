import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RelatedComics from './RelatedComics'
import ViewMore from './ViewMore'
import './ComicCard.css'

const MAX_LENGTH = 85

class ComicCard extends Component {
  render() {
    const { comic } = this.props
    return (
      <div className="comic-card">
        <img
          className="comic-image"
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
        <div className="comic-desc-container">
          <h2>{comic.name}</h2>
          {
            comic.description && comic.description.length > MAX_LENGTH ?
              <p>
                {`${comic.description.substring(0, MAX_LENGTH)}...`}
                <ViewMore />
              </p>
                 :
              <p>{comic.description || 'No description'}</p>
            }
        </div>
        <RelatedComics comics={comic.comics} />
      </div>
    )
  }
}

ComicCard.propTypes = {
  comic: PropTypes.object.isRequired,
}

export default ComicCard
