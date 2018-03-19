import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RelatedComics from './RelatedComics'
import ViewMore from './ViewMore'
import './ComicCard.css'
import Image from './Image'

const MAX_LENGTH = 85

class ComicCard extends Component {
  render() {
    const { comic } = this.props
    return (
      <div className="comic-card">
        <Image className="comic-image" {...comic.thumbnail} />
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
