import Slider from "react-slick";
import css from './TrendingMovies.module.css'
import { CiCalendarDate } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";




export const TrendingSlider = ({movies}) =>{

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
                    if(movie.release_date){
                        var splitted = movie.release_date.split("-")   
                    }
                    return(
                        <Link key={movie.id} className={css.link} to={`/movies/${movie.id}`}>
                        <div className={css.trendingItem}>
                            <div className={css.trendingItemContainer}>
                                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`: 'https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg'} alt={movie.title}/>
                                <div className={css.thumbsContainer}>
                                    <span> <CiCalendarDate size="1.2em" /> {splitted ? splitted[0] : '2023'}</span>
                                    <span> <MdStar size="1.2em" />{movie.vote_average.toFixed(1)}</span>
                                    <span> <MdLanguage size="1.2em" />{movie.original_language}</span>
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