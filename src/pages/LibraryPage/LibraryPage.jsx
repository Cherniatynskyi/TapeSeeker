import { useState } from "react"
import { useLocation } from 'react-router-dom'
import { useSelector } from "react-redux"
import { MoviesList } from "components/MoviesList/MoviesList"

const LibraryPage = () => {
  const location = useLocation()
  const {favorites, watchLater, scored} = useSelector(state => state.movies)
  const types = {
    "favorites": favorites,
    'watchLater': watchLater,
    'scored': scored
  }
  const [displayList, setDisplayList] = useState('favorites')


  const handleTypeChange = (e) =>{
    setDisplayList(e.target.id)
  }

  return (
    <div>
      <ul>
        <li><button onClick={(e)=>handleTypeChange(e)} id="favorites">Favorites</button></li>
        <li><button onClick={(e)=>handleTypeChange(e)} id="watchLater">Watch later</button></li>
        <li><button onClick={(e)=>handleTypeChange(e)} id="scored">Scored</button></li>
        {console.log(displayList)}
      </ul>
        <MoviesList movies={types[displayList]}
        listStyle={true} location={location}></MoviesList>
    </div>
  )
}

export default LibraryPage