import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'


const User = ({ user, getUser, getUserRepos, match, loading, repos }) => {

  // Effect as component did mount, empty input [] because infinite loop
  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
  // eslint-disable-next-line
  }, [])
  

  const {
      name, 
      avatar_url,
      location,
      bio,
      blog,
      login,
      company,
      html_url,
      followers,
      following,
      public_repos,
      public_gists
    } = user


    if(loading) return <Spinner />

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to search
        </Link>
        <div className='card grid-2'>
          <div className='all-center'>
            <img 
              src={avatar_url}
              alt={name}
              className='round-img'
              style={{width: '150px'}}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className='btn btn-dark my-1'>Visit Github Profil</a>
            <ul>
              <li>
                {
                  login && 
                  <>
                    <strong>Username: </strong> {login}
                  </>
                }
              </li>
              <li>
                {
                  company &&
                  <>
                    <strong>Company: </strong> {company}
                  </>
                }
              </li>
              <li>
                {
                  blog &&
                  <>
                    <strong>Website: </strong> {blog}
                  </>
                }
              </li>
            </ul>
          </div>
        </div>

        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-danger'>Followers: {public_repos}</div>
          <div className='badge badge-dark'>Followers: {public_gists}</div>
        </div>

        <Repos repos={repos}/>
      </Fragment>
    )
}

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
}


export default User
