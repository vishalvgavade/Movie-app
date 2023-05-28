import React from 'react'
import Searchbar from './Searchbar'
import Movies from './Movies'
function Home() {
  return (
    <div className='container'>
      <Searchbar />
      <Movies />
    </div>
  )
}
export default Home