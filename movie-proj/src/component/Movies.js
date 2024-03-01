import React from 'react'
import Movie from '../Movie'
import moviesdata from '../data/data'


export default function Movies() {
  return (
    <div className="movies">
       {moviesdata.map((m,index) =>(
        <Movie url={m.img} title={m.title} key={index}/>
       ))}
       
    </div>
  )
}
