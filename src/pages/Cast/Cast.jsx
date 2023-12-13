import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import * as API from '../../services/movies-api'

import css from './Cast.module.css'


export const Cast = () =>{
    const {movieId} = useParams()
    const [cast, setCast] = useState(null)
    const effectRun = useRef(true)

    useEffect(() => {
        const getMovie = async () =>{
           if(effectRun.current){
               
               try{
                   const fetchedMovie = await API.getMovieDetails(movieId, '/credits')
                //    console.log(fetchedMovie)
                   setCast(fetchedMovie.cast)
               }
               catch(error){alert('error')}
           }
           effectRun.current = false
        }
        getMovie()
       }, [movieId])

    
    return ( <div>
            <ul className={css.actorsContainer}>
                {cast && cast.map(actor => { 
                    if(actor.profile_path){
                        return (
                         <li key={actor.id}>
                            <p>{actor.name}</p>
                            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name}/>
                        </li>)
                    }
                    return (
                        <li key={actor.id}>
                           <p>{actor.name}</p>
                           <img src='https://image.tmdb.org/t/p/w200/q8bkN1GvXqjs1ZGFYWViH9o2WDq.jpg' alt='noimg'/>
                       </li>)
                })}
            </ul>
        </div>)
}   

