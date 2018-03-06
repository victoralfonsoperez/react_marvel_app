import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
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

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  getRelatedComics = (event) => {
    event.preventDefault()

    if (event.target.href) {
      fetchData(event.target.href)
        .then(related => this.setState({ related: related.data.results }))
        .then(this.setState({ ready: true }))
    }

    this.openModal()
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00'
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
    this.setState({ ready: false })
  }

  render() {
    const { comics } = this.props
    const { related, ready } = this.state
    return (
      <Fragment>
        <h4>
          {
            comics && comics.items.length > 0 ? 'Related Comics' : 'This character has no related comics'
          }
        </h4>
        <ul className="related-comics">
          {
            comics && comics.items && comics.items.map(item => (
              <li key={item.name}>
                <a className="no-link" href={item.resourceURI} onClick={this.getRelatedComics}>{item.name}</a>
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
        >
          {
              ready === false && (
                <FaSpinner />
              )
            }
          {
            related && related.map(item => (
              <div className="modal-content" key={item.id}>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.title} />
                <div>
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
  // related: PropTypes.object.isRequired,
  // fetchRelatedComics: PropTypes.func.isRequired,
}

export default RelatedComics
