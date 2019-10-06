import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Users from './Components/users/Users';
import Search from './Components/users/Search';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import User from './Components/users/User';

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/alertState'


const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar title='GitHub Finder' />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <>
                  <Search/>
                  <Users />
                </>
              )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App


