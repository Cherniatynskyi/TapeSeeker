import * as API from '../../services/movies-api'
import {useState, useEffect, useRef} from 'react'
import Notiflix from 'notiflix';
import { Hero } from 'components/Hero/Hero'
import { MoviesSlider } from 'components/MoviesSlider/MoviesSlider';
import css from './HomePage.module.css'


const HomePage = () => {

    const [trendMov, setTrendMov] = useState([])
    const [upcMov, setUpcMov] = useState([])
    const [topRatedMov, setTopRatedMov] = useState([])

    const [trendTv, setTrendTv] = useState([])
    const [airingTv, setAiringTv] = useState([])
    const [topRatedTv, setTopRatedTv] = useState([])
    const effectRun = useRef(true)

    useEffect(() => {
     const getMoviesFunc = async () =>{
        if(effectRun.current){
            effectRun.current = false
            try{
                const trendingMovies = await API.getMovies("/trending/movie/day")
                setTrendMov(trendingMovies)

                const upcomingMov = await API.getMovies("/movie/upcoming")
                setUpcMov(upcomingMov)

                const trMov = await API.getMovies("/movie/top_rated")
                setTopRatedMov(trMov)

                const trendingTV = await API.getMovies("/trending/tv/day")
                setTrendTv(trendingTV)

                const airTV = await API.getMovies("/tv/airing_today")
                setAiringTv(airTV)

                const topTv = await API.getMovies("/tv/top_rated")
                setTopRatedTv(topTv)
            }
            catch(error){Notiflix.Notify.failure('Error')}
        }
     }
     getMoviesFunc()
    }, [])
    
   
    return(
        <>
            <Hero movies={trendMov}/>
            <div className={css.contentPage}>
                <div className={css.sectionSign}>Movies</div>
                <h2 className={css.trendingTitle}>Trending Movies now</h2>
                <MoviesSlider  movies={trendMov} />
                <h2 className={css.trendingTitle}>Upcoming</h2>
                <MoviesSlider  movies={upcMov} />
                <h2 className={css.trendingTitle}>Top Rated</h2>
                <MoviesSlider  movies={topRatedMov} />
            </div>
            <div className={css.contentPage}>
                <div className={css.sectionSign}>TV Series</div>
                <h2 className={css.trendingTitle}>Trending TV series now</h2>
                <MoviesSlider  movies={trendTv} />
                <h2 className={css.trendingTitle}>Airing now</h2>
                <MoviesSlider  movies={airingTv} />
                <h2 className={css.trendingTitle}>Top Rated Series</h2>
                <MoviesSlider  movies={topRatedTv} />
            </div>  
        </>
    )
}

export default HomePage