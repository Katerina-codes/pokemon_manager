import React from 'react'
import ReactDOM from 'react-dom'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>Pokemon times!</h1>

        <img src='images/rapidash.png' className='pokemon' alt='A horse type Pokemon named Rapidash'/>

        <input className='search-box' type='text' placeholder='Enter the name of a Pokemon...'/>

        <button type className='button'>Search NOW!</button>
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Home />, app)
