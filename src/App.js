import React, { Component } from 'react'
import { getComics } from './utils/api'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {}

  componentDidMount() {
    getComics().then(response => this.updateComics(response.data))
  }

  updateComics = (data) => {
    this.setState({ comics: data.results })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.comics && this.state.comics.map(comic => (
            <div key={comic.id}>
              {comic.title}
            </div>
          ))
        }
      </div>
    )
  }
}

export default App
