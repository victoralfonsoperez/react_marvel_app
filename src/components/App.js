import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getComics } from '../utils/api'
import * as actions from '../actions'
import Header from './Header'
import './App.css'
import ComicCard from './ComicCard'

class App extends Component {
  state = {}

  componentDidMount() {
    getComics()
      .then(comics => this.props.getAllComics(comics))
  }

  render() {
    const { comics } = this.props
    return (
      <div className="App">
        <Header />
        <section>
          <article className="comics-container">
            {
          comics && comics.map(comic => (
            <ComicCard key={comic.id} comic={comic} />
          ))
        }
          </article>
          <aside>
            aside content
          </aside>
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ comics }) => (
  {
    comics: comics && comics.data && comics.data.results,
  }
)

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
