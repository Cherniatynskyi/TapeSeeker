import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import * as API from '../../../services/movies-api'
import Slider from "react-slick";

import css from './Cast.module.css'


const Cast = () =>{

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: true,
      };

    const {movieId} = useParams()
    const [cast, setCast] = useState(null)
    const effectRun = useRef(true)

    useEffect(() => {
        const getMovie = async () =>{
           if(effectRun.current){
               
               try{
                   const fetchedMovie = await API.getMovieDetails(movieId, '/credits')
                   setCast(fetchedMovie.cast)
               }
               catch(error){alert('error')}
           }
           effectRun.current = false
        }
        getMovie()
       }, [movieId])

    
    return (<>
            {cast &&
            <div>
                <Slider className={css.slider} {...settings}>
                    {cast.map(actor => { 
                            return (
                            <li className={css.actorContainer} key={actor.id}>
                                <div>
                                    <img className={css.img}  src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : 'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png'} alt={actor.name}/>
                                    <p className={css.name} >{ actor.name.length > 14 ? actor.name.split(' ')[1] : actor.name}</p>
                                    <p className={css.role} >{ actor.character.length > 14 ? actor.character.split(' ')[0] : actor.character}</p>
                                </div>
                            </li>)    
                    })}
                    </Slider>
            </div>}
            </>)
}   


export default Cast
