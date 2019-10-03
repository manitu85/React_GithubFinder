import React, { Component } from 'react'
import Navbar from './Components/layout/Navbar';
import UserItem from './Components/users/UserItem';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title='GitHub Finder'/>
        <UserItem />
      </div>
    )
  }
}

export default App


