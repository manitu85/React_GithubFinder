import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

import GithubContext from '../../context/github/githubContext';


const Users = () => {

  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext

  return (
    <div style={userStyle}>
      {
        loading ? <Spinner /> : users.map(user => <UserItem key={user.id} user={user} />)
      }
    </div>
    )
  }
  

let userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem'
}


export default Users
