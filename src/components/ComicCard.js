import React, { Component } from 'react'
import './ComicCard.css'

const MAX_LENGTH = 100

class ComicCard extends Component {
  render() {
    const { comic } = this.props
    return (
      <div className="comic-card">
        <img className="comic-image" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
        <div className="comic-desc-container">
          <h2>{comic.title}</h2>
          {comic.description && comic.description.length > MAX_LENGTH ?
                (
                  <p>
                    {`${comic.description.substring(0, MAX_LENGTH)}...`}
                    <span>Read more</span>
                  </p>
                ) :
                  <p>{comic.description || 'No description'}</p>
            }
        </div>

        <h3>{`Issue Number ${comic.issueNumber}`}</h3>
        <p>{comic.variantDescription}</p>
        <p>{`Last modified: ${comic.modified.toLocaleString()}`}</p>
        <p>{`format: ${comic.format}`}</p>
        <p>{`series ${comic.series.name}`}</p>
        <a href={comic.series.resourceURI}>series link</a>
        {
            comic.variants.lenght > 0 && comic.variants.map((comicvariant, i) => (
              <a
                key={comicvariant[i] && comicvariant[i].resourceURI}
                href={comicvariant[i] && comicvariant[i].resourceURI}
              >
                {comicvariant[i].name}
              </a>
            ))
        }
        {
            comic.urls.lenght > 0 && comic.urls.map((comicurl, i) => (
              <a
                key={comicurl[i] && comicurl[i].url}
                href={comicurl[i] && comicurl[i].url}
              >{comicurl.type}
              </a>
            ))
        }
      </div>
    )
  }
}

export default ComicCard
