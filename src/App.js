import React, { Component } from 'react'
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import Search from './Components/users/Search';

const envClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
const envClientSecret = process.env.REACT_APP_GITHUB_CLIENT_ID

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  // Fetch data from github api 
  async componentDidMount() {
    this.setState({loading: true})
  
    const users = await fetch(`https://api.github.com/users?client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()
    
    this.setState({
      users: data,
      loading: false
    })
  }

  // Search github users
  searchUsers = async (text) => {
    this.setState({ loading: true })

    const users = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()

    this.setState({
      users: data.items,
      loading: false
    })
  }
  

  render() {
    return (
      <>
        <Navbar title='GitHub Finder'/>
        <div className='container'>
          <Search searchUsers={this.searchUsers}  />
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


