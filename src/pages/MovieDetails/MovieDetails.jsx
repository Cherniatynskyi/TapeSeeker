import { Link, useParams, Outlet } from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'
import * as API from '../../services/movies-api'

import css from './MovieDetails.module.css'

const MovieDetails = () =>{

    const [movie, setMovie] = useState({})
    const {movieId} = useParams()
    const effectRun = useRef(true)

    const {title, vote_average, poster_path, genres, overview} = movie

    useEffect(() => {
     const getMovie = async () =>{
        if(effectRun.current){
            effectRun.current = false
            try{
                const fetchedMovie = await API.getMovieDetails(movieId)
                setMovie(fetchedMovie)
            }
            catch(error){alert('error')}
        }
     }
     getMovie()
    }, [movieId])


    return (
        <>
            <div className={css.detailsContainer}>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                <div>
                    <p>{title}</p>
                    <p>Score: {vote_average !== 0 ? Math.ceil((vote_average)*10)/10 : 'No reviews yet'}</p>
                    <p>Overview</p>
                    <p>{overview}</p>
                    <p>Genres</p>
                    <ul>
                        {Object.keys(movie).length !== 0 && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                    </ul>
                </div>
            </div>
            <ul>
                <li className={css.detailsMenuButton}><Link to='cast'>Cast</Link></li>
                <li className={css.detailsMenuButton}><Link to='reviews'>Reviews</Link></li>
            </ul>
            <Outlet/>
        </>
        
    )
}

export default MovieDetails