import * as API from '../../services/movies-api'
import {useState, useEffect, useRef} from 'react'
import { MoviesList } from 'components/MoviesList/MoviesList'
import {useLocation} from 'react-router-dom'
import css from './HomePage.module.css'


const HomePage = () => {

    const [movies, setMovies] = useState([])
    const effectRun = useRef(true)
    const location = useLocation()

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
            <MoviesList movies={movies} location={location}/>
        </>
    )
}

export default HomePage