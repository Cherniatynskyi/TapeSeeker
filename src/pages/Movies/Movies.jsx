import { useState, useEffect, useRef} from "react"
import * as API from '../../services/movies-api'
import { SearchBar } from "../../components/SearchBar/SearchBar"
import {Link, useSearchParams, useLocation} from 'react-router-dom'
import css from '../HomePage/HomePage.module.css'

const Movies = () =>{
    const [searchResult, setSearchResult] = useState(null)
    const effectRun = useRef(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q')
    const location = useLocation()

    useEffect(() => {
        const getMovie = async () =>{
           if(effectRun.current){
               try{
                    if(q == null){
                        return
                    }
                   const fetchedMovie = await API.searchMovies(q)
                   setSearchResult(fetchedMovie)
               }
               catch(error){alert('error')}
           }
           effectRun.current = true
        }
        getMovie()
       }, [q])

    const formHandler = ({ query }) => {
        setSearchParams({q: query})
      }

    
    return ( 
        <div>
            <SearchBar onSubmit={formHandler}/>
            <ul className={css.moviesList}>
                {searchResult ? searchResult.map(movie => {
                    return(
                     <Link key={movie.id} to={`${movie.id}`} state={{from: location}}>
                        <li>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
                        </li>
                    </Link>)
                }): <h1 className={css.title}>Search for Movies</h1>}
            </ul>   
        </div>)
}   

export default Movies

