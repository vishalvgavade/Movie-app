import React, { useContext } from 'react'
import { AppContext } from '../context'
import '../App.css'
import {NavLink} from 'react-router-dom'
function Movies() {
  const {movie,isLoading} = useContext(AppContext)
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <>
    <section className="MoviePage">
      <div className="grid grid-4-col">
      {
      movie.map((current)=>{
        const {imdbID , Title ,Poster} = current
        const movieTitle = Title.slice(0,15);
       return (
        <NavLink to={`movie/${imdbID}`} key={imdbID}>
        <div className="card" >
          <div className="card-info">
            <h2>{Title.length >=15 ? `${movieTitle}...`: Title}</h2>
            <img src={Poster} alt="" />
          </div>
        </div>
        </NavLink>
       )
      })
    }
    </div>
    </section>
    </>
  )
}
export default Movies