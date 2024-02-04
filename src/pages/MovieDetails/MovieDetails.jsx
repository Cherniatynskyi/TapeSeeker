import { useParams, Outlet } from 'react-router-dom'
import {useState, useEffect, Suspense} from 'react'
import { MoviesSlider } from 'components/MoviesSlider/MoviesSlider';
import * as API from '../../services/movies-api'
import Notiflix from 'notiflix';
import css from './MoviesDetails.module.css'

import { DetailsHero } from '../../components/DetailsComponents/DetailsHero/DetailsHero';
import { DetailsInfo } from 'components/DetailsComponents/DetailsInfo/DetailsInfo';

const MovieDetails = () =>{

    const [movie, setMovie] = useState({})
    const [movieVids, setMovieVids] = useState({})
    const [movieSimilar, setMovieSimilar] = useState([])
    const {movieId} = useParams()


    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
     const getMovie = async () =>{
        
            try{
                const fetchedMovie = await API.getMovieDetails(movieId)
                setMovie(fetchedMovie)

                const movieVideos = await API.getMovieDetails(movieId, '/videos')
                setMovieVids(movieVideos)

                const movieSimilarF = await API.getMovieDetails(movieId, '/similar')
                setMovieSimilar(movieSimilarF.results)
            }
            catch(error){Notiflix.Notify.failure('Error')}
        
     }
     getMovie()
    }, [movieId])


    return (
        <>
            <DetailsHero movie={movie} movieVids = {movieVids}/>  
           
            <DetailsInfo movie={movie} movieVids = {movieVids}/>
                <Suspense fallback={<div>Loading....</div>}>
                    <Outlet/>
                </Suspense>
            {console.log(movieSimilar, "AAAA")}  
            <div className={css.similarsSlider}>
                <h3 className={css.similarsTitle}>You also might like</h3>
                <MoviesSlider movies={movieSimilar} type='movies'/>
            </div>
        </>
        
    )
}

export default MovieDetails

