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

    
    return (<>
            {cast && <div>
            {cast.length !== 0 ? <ul className={css.actorsContainer}>
                {cast.map(actor => { 
                        return (
                         <li key={actor.id}>
                            <p>{actor.name}</p>
                            <img width='200' height='300' src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : 'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png'} alt={actor.name}/>
                        </li>)    
                })}
            </ul> : <p className={css.errorTitle}>No cast</p>}
        </div>}
    </>)
}   

