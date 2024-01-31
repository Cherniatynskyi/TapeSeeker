import Slider from "react-slick";
import css from './MoviesSlider.module.css'
import { CiCalendarDate } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";




export const MoviesSlider = ({movies, type}) =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
      };

    return(
        <div>
            <Slider className={css.slider} {...settings}>
                {movies.map(movie =>{
                    const path = type==='tv' ? `/tv/${movie.id}` : `/movies/${movie.id}`
                    const title = movie.title ?? movie.name
                    if(movie.release_date){
                        var splitted = movie.release_date.split("-")   
                    }
                    return(
                        <Link key={movie.id} className={css.link} to={path}>
                        <div className={css.trendingItem}>
                            <div className={css.trendingItemContainer}>
                                <img className={css.img} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: 'https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg'} alt={movie.title}/>
                                <p className={css.movieTitle}>{ title.length > 20 ? `${title.substring(0, 19)}...`: title}</p>
                                <div className={css.thumbsContainer}>
                                    <span className={css.thumb}> <CiCalendarDate size="1.2em" /> {splitted ? splitted[0] : '2023'}</span>
                                    <span className={css.thumb}> <MdStar size="1.2em" />{movie.vote_average.toFixed(1)}</span>
                                    <span className={css.thumb}> <MdLanguage size="1.2em" />{movie.original_language}</span>
                                </div>
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </Slider>
        </div>
    )
}