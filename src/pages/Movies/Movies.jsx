import { useState, useEffect, useRef } from "react"
import * as API from '../../services/movies-api'
import { SearchBar } from "../../components/SearchBar"
import {Link} from 'react-router-dom'
import css from '../HomePage/HomePage.module.css'



export const Movies = () =>{
    const [searchResult, setSearchResult] = useState(null)
    const [query, setQuery] = useState('')
    const effectRun = useRef(false)

    useEffect(() => {
        const getMovie = async () =>{
           if(effectRun.current){
               try{
                   const fetchedMovie = await API.searchMovies(query)
                   console.log(fetchedMovie, 'FETCHED')
                   setSearchResult(fetchedMovie)
               }
               catch(error){alert('error')}
           }
           effectRun.current = true
        }
        getMovie()
       }, [query])

       const formHandler = ({ query }) => {
        setQuery(query)
      }

    
    return ( 
        <div>
            <SearchBar onSubmit={formHandler}/>
            <ul className={css.moviesList}>
                {searchResult && searchResult.map(movie => {
                    return(
                     <Link key={movie.id} to={`${movie.id}`}>
                        <li>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
                        </li>
                    </Link>)
                })}
            </ul>   
        </div>)
}   

