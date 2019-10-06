import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


const Search = () => {

  const githubContext = useContext(GithubContext)
  const { users, clearUsers } = githubContext

  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext

  const [text, setText] = useState('')

  // const onChangeInput = e =>  this.setState({ [e.target.name] : e.target.value })
  const onChangeInput = e => setText(e.target.value)

  const onSubmit = e => {
    e.preventDefault();

    if(text === '') {
      setAlert('Please enter something', 'light')
    } else {
      githubContext.searchUsers(text)
      setText('')
    }
  }
  
  return (
    <div>
      <form 
        className='form' 
        onSubmit={onSubmit}>
        <input 
          type='text' 
          name='text' 
          placeholder='Search Users...'
          value={text}
          onChange={onChangeInput}
        />
        <input 
          type='submit' 
          value='Search'
          className='btn btn-dark btn-block'
        />
        {
          users.length > 0 && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>
        }
      </form>
    </div>
  )
}


export default Search
