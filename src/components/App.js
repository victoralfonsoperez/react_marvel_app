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
      .then(characters => this.props.getAllCharacters(characters, true))
  }

  render() {
    const { characters, ready } = this.props
    return (
      <div className="App">
        <Header />
        <section>
          <article className="comics-container">
            <SectionHeading imageSrc={charactersLogo} title="Characters" />
            {
              ready === false && (
                <div>loading...</div>
              )
            }
            {
          ready && characters && characters.map(comic => (
            <ComicCard key={comic.id} comic={comic} />
          ))
        }
            {
          ready && characters && characters.length === 0 && (
            <div className="no-results">
              There are no results for this search
            </div>
          )
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

App.defaultProps = {
  characters: [],
}

App.propTypes = {
  getAllCharacters: PropTypes.func.isRequired,
  characters: PropTypes.array,
  ready: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ characters, newCharacters, ready }) => (
  {
    characters: characters && characters.data && characters.data.results,
    newCharacters: newCharacters && newCharacters.data && newCharacters.data.results,
    ready,
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
