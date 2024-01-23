import { useParams, Outlet } from 'react-router-dom'
import {useState, useEffect, useRef, Suspense} from 'react'
import * as API from '../../services/movies-api'
import Notiflix from 'notiflix';

import { DetailsHero } from '../../components/DetailsComponents/DetailsHero/DetailsHero';
import { DetailsInfo } from 'components/DetailsComponents/DetailsInfo/DetailsInfo';

const MovieDetails = () =>{

    const [movie, setMovie] = useState({})
    const [movieVids, setMovieVids] = useState({})
    const {movieId} = useParams()
    const effectRun = useRef(true)


    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
     const getMovie = async () =>{
        if(effectRun.current){
            effectRun.current = false
            try{
                const fetchedMovie = await API.getMovieDetails(movieId)
                setMovie(fetchedMovie)

                const movieVideos = await API.getMovieDetails(movieId, '/videos')
                setMovieVids(movieVideos)
            }
            catch(error){Notiflix.Notify.failure('Error')}
        }
     }
     getMovie()
    }, [movieId])


    return (
        <>
            <DetailsHero movie={movie}/>    
            <DetailsInfo movie={movie} movieVids = {movieVids}/>
                <div>
                    
                </div>
                <Suspense fallback={<div>Loading....</div>}>
                    <Outlet/>
                </Suspense>
            
        </>
        
    )
}

export default MovieDetails

