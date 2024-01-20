import css from './Hero.module.css'
import { Link } from 'react-router-dom'
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import Slider from "react-slick";

export const Hero = ({movies})=>{
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 9000,
      };

    return(<>
  
    <Slider className={css.slider} {...settings}>
            {movies&& movies.map(movie =>{
                return(
                    <div key={movie.id}>
                    <div className={css.heroContainer} style={{backgroundImage: `linear-gradient(0deg, #141414 10%, rgba(20, 20, 20, .3) 100%), url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`}}>
                        <div className={css.heroTextContainer}>
                            <h2 className={css.heroTitle}>{movie.title ? movie.title : movie.name}</h2>
                            <p className={css.heroDesc}>{movie.overview}</p>
                            <div className={css.heroNav}>
                                < Link className={css.heroButton} to={`/movies/${movie.id}`}><FaCirclePlay size="1.2em"/> Click to view</Link>
                                <div className={css.heroOptions}>
                                    <button className={css.heroOptionItem}><FaRegHeart className={css.heroIcon} size="1.3em" /></button>
                                    <button className={css.heroOptionItem}><FaRegClock className={css.heroIcon}  size="1.3em" /></button>
                                    <button className={css.heroOptionItem}><AiOutlineLike className={css.heroIcon}  size="1.3em" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            })}
    </Slider>
</>)
}




