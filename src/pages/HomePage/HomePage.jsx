import * as API from '../../services/movies-api'
import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

import css from './HomePage.module.css'

const HomePage = () => {

    const [movies, setMovies] = useState([])
    const effectRun = useRef(true)

    useEffect(() => {
     const getMovies = async () =>{
        if(effectRun.current){
            effectRun.current = false
            try{
                const fetchedMovies = await API.getTrandMovies()
                setMovies(fetchedMovies)
            }
            catch(error){alert('error')}
        }
     }
     getMovies()
    }, [])
    
   
    return(
        <>
            <div className={css.homepageTitle}>Trending movies</div>
            <ul className={css.moviesList}>
                {movies.map(movie => {
                    return(
                     <Link key={movie.id} to={`movies/${movie.id}`}>
                        <li>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
                        </li>
                    </Link>)
                })}
            </ul>
        </>
    )
}

export default HomePage