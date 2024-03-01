import React from 'react'

export default function Movie(props) {
    const {url,title}=props
  return (
    <div className='movie'>
        <img src={url} alt="movie" />
        <h3>{title}</h3>
    </div>
  )
}
