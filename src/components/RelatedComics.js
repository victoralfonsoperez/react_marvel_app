import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import { FaSpinner } from 'react-icons/lib/fa'
import './RelatedComics.css'
import { fetchData } from '../utils/api'
import closeButton from '../assets/btn-close.png'
import Image from './Image'
import CustomButton from './CustomButton'

class RelatedComics extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
      related: [],
      ready: false,
    }
  }

  getRelatedComics = (event) => {
    event.preventDefault()

    if (event.target.href) {
      fetchData(event.target.href)
        .then(related => this.setState({ related: related.data.results }))
        .then(this.setState(state => ({
          ready: [...state.ready, true],
        })))
    }

    this.openModal()
  }

  openModal = () => {
    this.setState(() => ({
      modalIsOpen: true,
    }))
  }

  closeModal = () => {
    this.setState(() => ({
      modalIsOpen: false,
      ready: false,
    }))
  }

  render() {
    const { comics } = this.props
    const { related, ready } = this.state
    const relatedItemsQuantity = 4
    return (
      <Fragment>
        <h4>
          {
            comics && comics.items.length > 0 ? 'Related Comics' : 'This character has no related comics'
          }
        </h4>
        <ul className="related-comics">
          {
            comics.items &&
            comics.items.filter((i, index) => (index < relatedItemsQuantity))
             .map(i => (
               <li key={i.name}>
                 <a className="no-link" href={i.resourceURI} onClick={this.getRelatedComics}>{i.name}</a>
               </li>
              ))
          }
        </ul>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
          className="modal"
          overlayClassName="overlay"
        >
          {
            !ready && (<FaSpinner />)
          }
          <Fragment>
            <button className="close" onClick={this.closeModal}><img src={closeButton} alt="close" /></button>
          </Fragment>
          {
            ready && related && related.map(item => (
              <div className="modal-content" key={item.id}>
                <Image {...item.thumbnail} />
                <div className="modal-description">
                  <h3 className="issue-title">{item.title || 'No title available'}</h3>
                  <p className="issue-description">{item.description || 'No description available'}</p>
                </div>
                <div className="modal-actions-container">
                  <CustomButton text="Add to favourites" className="add-favorites-btn" />
                  {
                    item.prices && item.prices.filter(price => price.type === 'printPrice')
                      .map(relatedComic => (
                        <CustomButton key={relatedComic.type} {...relatedComic} className="buy-comic-btn" text="buy for" />
                      ))
                  }
                </div>
              </div>
            ))
          }
        </Modal>
      </Fragment>
    )
  }
}

RelatedComics.propTypes = {
  comics: PropTypes.object.isRequired,
}

export default RelatedComics
