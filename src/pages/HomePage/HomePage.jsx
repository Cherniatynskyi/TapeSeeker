import * as API from '../../services/movies-api'
import {useState, useEffect, useRef} from 'react'
import Notiflix from 'notiflix';
import { Hero } from 'components/Hero/Hero'
import { TrendingSlider } from 'components/TrendingSlider/TrendingSlider';
import css from './HomePage.module.css'


const HomePage = () => {

    const [movies, setMovies] = useState([])
    const [trendTV, setTrendTv] = useState([])
    const effectRun = useRef(true)

    useEffect(() => {
     const getMovies = async () =>{
        if(effectRun.current){
            effectRun.current = false
            try{
                const fetchedMovies = await API.getTrandMovies()
                setMovies(fetchedMovies)

                const fetchedTV = await API.getTrendTV()
                setTrendTv(fetchedTV)
            }
            catch(error){Notiflix.Notify.failure('Error')}
        }
     }
     getMovies()
    }, [])
    
   
    return(
        <>
            <Hero movies={movies}/>
            <div className={css.contentPage}>
                <div className={css.sectionSign}>Movies</div>
                <h2 className={css.trendingTitle}>Trending Movies now</h2>
                <TrendingSlider movies={movies} />
                <h2 className={css.trendingTitle}>Trending TV series now</h2>
                <TrendingSlider movies={trendTV} />
            </div>
            
        </>
    )
}

export default HomePage