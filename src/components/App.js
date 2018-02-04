import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCharacters } from '../utils/api'
import * as actions from '../actions'
import Header from './Header'
import './App.css'
import charactersLogo from '../assets/characters.png'
import ComicCard from './ComicCard'

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
        <div className="characters-heading">
          <img className="charactersLogo" src={charactersLogo} alt="" />
          <h1>Characters</h1>
        </div>
        <section>
          <article className="comics-container">
            {
          characters && characters.map(comic => (
            <ComicCard key={comic.id} comic={comic} />
          ))
        }
          </article>
          <aside className="aside-container">
            aside content
          </aside>
        </section>
      </div>
    )
  }
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
