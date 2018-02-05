import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { getCharacters } from '../utils/api'
import * as actions from '../actions'
import Header from './Header'
import './App.css'
import charactersLogo from '../assets/characters.png'
import favouritesLogo from '../assets/favourites.png'
import ComicCard from './ComicCard'
import SectionHeading from './SectionHeading'

class App extends Component {
  state = {}

  componentDidMount() {
    getCharacters()
      .then(characters => this.props.getAllCharacters(characters))
  }

  render() {
    const { characters } = this.props
    return (
      <div className="App">
        <Header />
        <section>
          <article className="comics-container">
            <SectionHeading imageSrc={charactersLogo} title="Characters" />
            {
          characters && characters.map(comic => (
            <ComicCard key={comic.id} comic={comic} />
          ))
        }
          </article>
          <aside className="aside-container">
            <SectionHeading imageSrc={favouritesLogo} title="My favourites" />
          </aside>
        </section>
      </div>
    )
  }
}

App.propTypes = {
  getAllCharacters: PropTypes.func.isRequired,
  characters: PropTypes.object.isRequired,
}

const mapStateToProps = ({ characters }) => (
  {
    characters: characters && characters.data && characters.data.results,
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
