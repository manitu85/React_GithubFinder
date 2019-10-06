import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import User from './Components/users/User';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';

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
              
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route path='*' component={NotFound} />
              />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App


