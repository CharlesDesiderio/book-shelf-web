import React, { Component } from 'react'
import AppContext from './AppContext'
import axios from 'axios'

class Provider extends Component {
  
  state = {
    testData: 'hello!',
    getBookDetails: (isbn) => {
      if (isbn.length === 10 || isbn.length === 13) {
        axios.get(`https://openlibrary.org/isbn/${isbn}`)
        .then(res => {
          console.log(res)
        })
      } else {
        console.log('Invalid ISBN style')
      }
    },
    getUserProfile: (event, userName) => {
      event.preventDefault()
      axios.get(`http://localhost:3001/user/profile/${userName}`)
      .then(res => {
        console.log(res)
      })
    }
  }

  render() {
    return(
      <AppContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default Provider