import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import { isArray } from 'lodash'
import { FaSpinner } from 'react-icons/lib/fa'
import './RelatedComics.css'
import { fetchData } from '../utils/api'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
  },
}

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
            isArray(comics.items) &&
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
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          {
              !ready && (
                <FaSpinner />
              )
            }
          {
            ready && related && related.map(item => (
              <div className="modal-content" key={item.id}>
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.title}
                />
                <div className="modal-description">
                  <h3>{item.title}</h3>
                  <p>{item.description || 'no description available'}</p>
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
