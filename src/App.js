import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import Search from './Components/users/Search';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import User from './Components/users/User';

import GithubState from './context/github/GithubState'

const envClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
const envClientSecret = process.env.REACT_APP_GITHUB_CLIENT_ID

const App = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setUserRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

 

  // Get single Github user
  const getUser = async username => {
    setLoading(true)

    const users = await fetch(`https://api.github.com/users/${username}?client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()

    setUser(data)
    setLoading(false)
  }

  // Get user repos
  const getUserRepos = async username => {
    setLoading(true)

    const users = await fetch(`https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc&client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()

    setUserRepos(data)
    setLoading(false)
  }

  // Clear users from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }
  
  // Set alert for empty search
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 4000)
  }
  
  return (
    <GithubState>
      <Router>
        <Navbar title='GitHub Finder' />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <>
                <Search
                  clearUsers={clearUsers}
                  showClear={users.length > 0 ? true : false}
                  setAlert={showAlert}
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
                getUser={getUser}
                getUserRepos={getUserRepos}
                user={user}
                repos={repos}
                loading={loading}
              />
            )}
            />
          </Switch>
        </div>
      </Router>
    </GithubState>
  )
}

export default App


