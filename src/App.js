import React, { Component } from 'react'
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';



class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({loading: true})
  
    const envClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    const envClientSecret = process.env.REACT_APP_GITHUB_CLIENT_ID
    
    const users = await fetch(`https://api.github.com/users?client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()
    
    this.setState({
      users: data,
      loading: false
    })
  }
  
  
  render() {
    return (
      <>
        <Navbar title='GitHub Finder'/>
        <div className='container'>
          <Users 
            users={this.state.users}
            loading={this.state.loading}
          />
        </div>
      </>
    )
  }
}

export default App


