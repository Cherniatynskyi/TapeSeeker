import * as API from '../../services/movies-api'
import {useState, useEffect, useRef} from 'react'
import { MoviesList } from 'components/MoviesList/MoviesList'
import {useLocation} from 'react-router-dom'
import Notiflix from 'notiflix';
import { Hero } from 'components/Hero/Hero'
import { TrendingSlider } from 'components/TrendingSlider/TrendingSlider';


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
            catch(error){Notiflix.Notify.failure('Error')}
        }
     }
     getMovies()
    }, [])
    
   
    return(
        <>
            <Hero movie={movies[0]}/>
            <TrendingSlider movies={movies} />
            <MoviesList movies={movies} location={location}/>
            
        </>
    )
}

export default HomePage