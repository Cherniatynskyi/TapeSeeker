import { Link, useParams, Outlet } from 'react-router-dom'
import {useState, useEffect, useRef, Suspense} from 'react'
import * as API from '../../services/movies-api'
import Notiflix from 'notiflix';

import css from './MovieDetails.module.css'
import { DetailsHero } from '../../components/DetailsHero/DetailsHero';
import { DetailsInfo } from 'components/DetailsInfo/DetailsInfo';

const MovieDetails = () =>{

    const [movie, setMovie] = useState({})
    const {movieId} = useParams()
    const effectRun = useRef(true)


    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
     const getMovie = async () =>{
        if(effectRun.current){
            effectRun.current = false
            try{
                const fetchedMovie = await API.getMovieDetails(movieId)
                setMovie(fetchedMovie)
            }
            catch(error){Notiflix.Notify.failure('Error')}
        }
     }
     getMovie()
    }, [movieId])


    return (
        <>
            <DetailsHero movie={movie}/>
            <DetailsInfo movie={movie}/>
            <ul>
                <li className={css.detailsMenuButton}><Link to='cast'>Cast</Link></li>
                <li className={css.detailsMenuButton}><Link to='reviews'>Reviews</Link></li>
            </ul>
            <Suspense fallback={<div>Loading....</div>}>
                <Outlet/>
            </Suspense>
        </>
        
    )
}

export default MovieDetails

