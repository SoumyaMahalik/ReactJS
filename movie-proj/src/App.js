import React from 'react'
import Movies from './component/Movies'
import Cmovies from './component/Cmovies'
import Hmovies from './component/Hmovies'

export default function App() {
  return (
    <div>
        <h2>Action Movies</h2>
        <Movies />
        <h2>Comedy Movies</h2>
        <Cmovies/>
        <h2>Horror Movies</h2>
        <Hmovies />
       
    </div>
  )
}
