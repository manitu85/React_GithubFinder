import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import Search from './Components/users/Search';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import User from './Components/users/User';

const envClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
const envClientSecret = process.env.REACT_APP_GITHUB_CLIENT_ID

class App extends Component {

  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  // Search GitHub users - driling props as text
  searchUsers = async text => {
    this.setState({ loading: true })

    const users = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()

    this.setState({
      users: data.items,
      loading: false
    })
  }

  // Get single Github user
  getUser = async username => {
    this.setState({ loading: true })

    const users = await fetch(`https://api.github.com/users/${username}?client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()

    this.setState({
      user: data,
      loading: false
    })
  }

  // Get user repos
  getUserRepos = async username => {
    this.setState({ loading: true })

    const users = await fetch(`https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc&client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()

    this.setState({
      repos: data,
      loading: false
    })
  }

  // Clear users from state
  clearUsers = () => this.setState({users: [], loading: false})

  // Set alert for empty search
  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type} })
    setTimeout(() => this.setState({alert: null}), 4000)
  }
  

  render() {
    const { users, loading, alert, user, repos } = this.state
    return (
      <Router>
        <Navbar title='GitHub Finder'/>
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route  exact path='/' render={props => (
              <>
                <Search
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers} 
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />
                <Users
                  users={users}
                  loading={loading}
                />
              </>
              )} 
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' render={props => (
              <User 
                {...props} 
                getUser={this.getUser}
                getUserRepos={this.getUserRepos}
                user={user}
                repos={repos}
                loading={loading}
              />
            )} 
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App


