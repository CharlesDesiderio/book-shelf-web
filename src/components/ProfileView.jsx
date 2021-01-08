import React, { useState } from 'react'
import AppContext from './AppContext'


const ProfileView = () => {
  const [textInput, setTextInput] = useState('')

  return(
    <AppContext.Consumer>
      {context => (
        <div>
          <form onSubmit={(event) => context.state.getUserProfile(event, textInput)}>
          <input type="text" onChange={(event) => setTextInput(event.target.value)} />
          <input type="submit" value="View User" />
          </form>
          {context.state.testData}
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default ProfileView