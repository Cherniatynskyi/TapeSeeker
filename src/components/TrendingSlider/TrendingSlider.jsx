import Slider from "react-slick";
import css from './TrendingMovies.module.css'
import { CiCalendarDate } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";



export const TrendingSlider = ({movies}) =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      };
    return(
        <div>
            <h2 className={css.trendingTitle}>Trending now</h2>
            <Slider className={css.test} {...settings}>
                {movies.map(movie =>{
                    if(movie.release_date){
                        var splitted = movie.release_date.split("-")   
                    }
                    return(
                        <Link className={css.link} to={`/movies/${movie.id}`}>
                        <div key={movie.id} className={css.trendingItem}>
                            <div className={css.trendingItemContainer}>
                                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`: 'https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg'} alt={movie.title}/>
                                <div className={css.thumbsContainer}>
                                    <span> <CiCalendarDate size="1.2em" /> {splitted ? splitted[0] : '2023'}</span>
                                    <span> <MdStar size="1.2em" />{movie.vote_average.toFixed(1)}</span>
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