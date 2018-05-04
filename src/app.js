import React from 'react'
import ReactDOM from 'react-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokemon times!</h1>
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Home />, app)
