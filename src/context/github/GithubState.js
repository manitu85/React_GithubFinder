import React, { useReducer } from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import { 
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING
 } from '../types'

const envClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
const envClientSecret = process.env.REACT_APP_GITHUB_CLIENT_ID

const GithubState = props => {

  const initalState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initalState)

  // Search GitHub users -
  const searchUsers = async text => {
    setLoading()

    const users = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()

    dispatch({
      type: SEARCH_USERS,
      payload: data.items
    })
  }
  
  // Get single Github user
  const getUser = async username => {
    setLoading()

    const users = await fetch(`https://api.github.com/users/${username}?client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()

    dispatch({
      type: GET_USER,
      payload: data
    })
  }

  // Get user repos
  const getUserRepos = async username => {
    setLoading()

    const users = await fetch(`https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc&client_id=${envClientId}&client_secret=${envClientSecret}`)
    const data = await users.json()

    dispatch({
      type: GET_REPOS,
      payload: data
    })
  }

  // Clear users from state
  const clearUsers = () => dispatch({ type: CLEAR_USERS})

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GithubContext.Provider
      value = {{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    > 
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState