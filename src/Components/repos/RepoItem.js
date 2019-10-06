import React from 'react'
import PropTypes from 'prop-types'


const RepoItem = ({repo}) => {
  console.log(repo);
  return (
    <div className='card'>
      <a href={repo.html_url}>{repo.name}</a>
      <h1>{repo.name}</h1>
    </div>
  )}


RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default `RepoItem`
