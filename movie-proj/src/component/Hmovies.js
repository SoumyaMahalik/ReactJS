import React from 'react'
import horror from '../data/hdata'
import Movie from '../Movie'

export default function Hmovies() {
  return (
    <div className='movies'>
        {horror.map((h,index)=>(
            <Movie url={h.img} title={h.title} key={index}/>
        ))}
    </div>
  )
}
