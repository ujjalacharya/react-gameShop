import React from 'react'

const Featured = ({id, featured, handleFeaturedClick}) => {
  return (
    <span onClick={handleFeaturedClick(id)}>
    {featured ? (
      <a className="ui right yellow corner label">
        <i className="star icon"></i>
      </a>
    ):(
    <a className="ui right corner label">
        <i className="star icon"></i>
      </a>
    )
    }
    </span>
  )
}

export default Featured
