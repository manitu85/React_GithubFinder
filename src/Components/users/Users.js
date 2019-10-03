import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


const Users = ({users, loading}) => (
    <div style={userStyle}>
      {
        loading ? <Spinner /> : users.map(user => <UserItem key={user.id} user={user} />)
      }
    </div>
  )

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

let userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem'
}


export default Users
