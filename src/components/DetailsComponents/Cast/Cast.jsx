
import { useState, useEffect } from "react"
import * as API from '../../../services/movies-api'
import Slider from "react-slick";

import css from './Cast.module.css'


const Cast = ({type, id}) =>{

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: true,
      };

    const [cast, setCast] = useState(null)

    useEffect(() => {
        const getMovie = async () =>{

               try{
                   if(type==='mov'){
                        const fetchedMovie = await API.getMovieDetails(id, '/credits')
                        setCast(fetchedMovie.cast)
                    }
                   else{
                        const fetchedMovie = await API.getTvDetails(id, '/credits')
                        setCast(fetchedMovie.cast)
                   }
               }
               catch(error){}
           
        }
        getMovie()
       }, [id, type])

    
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
