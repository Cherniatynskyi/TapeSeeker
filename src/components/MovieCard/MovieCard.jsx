import stylesForGrid from '../MoviesList/MoviesList.module.css'
import stylesForList from '../MoviesList/MoviesList2.module.css'
import {Link} from 'react-router-dom'
import { CiCalendarDate } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import { MdLanguage } from "react-icons/md";

export const MovieCard = ({movie, location, listStyle}) => {
    var css = listStyle ? stylesForGrid : stylesForList
  return (
    <Link className={css.moviesListItem} key={movie.id} to={location.pathname === '/' ? `movies/${movie.id}`: `${movie.id}`} state={{from: location}}>
    {listStyle ? 
    <>
        <img className={css.img} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: 'https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg'} alt={movie.title}/>
        <h3 className={css.movieTitle} >{movie.title ? movie.title : movie.name}</h3>
        <div className={css.thumbsContainer}>
                <span className={css.thumb}> <CiCalendarDate size="1.2em" /> {movie.release_date ? movie.release_date.split("-")[0] : movie?.first_air_date?.split("-")[0]}</span>
                <span className={css.thumb}> <MdStar size="1.2em" />{movie.vote_average.toFixed(1)}</span>
                <span className={css.thumb}> <MdLanguage size="1.2em" />{movie.original_language}</span>
        </div>
    </>
     :
    <>
        <img className={css.img} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: 'https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg'} alt={movie.title}/>
        <div className={css.textContainer}>
            <h3 className={css.movieTitle} >{movie.title ? movie.title : movie.name}</h3>
            <p className={css.movieOverview}>{movie.overview}</p>
            <div className={css.thumbsContainer}>
                <span className={css.thumb}> <CiCalendarDate size="1.2em" /> {movie.release_date ? movie.release_date.split("-")[0] : movie?.first_air_date?.split("-")[0]}</span>
                <span className={css.thumb}> <MdStar size="1.2em" />{movie.vote_average.toFixed(1)}</span>
                <span className={css.thumb}> <MdLanguage size="1.2em" />{movie.original_language}</span>
            </div>
            <div className={css.actionButtonsWrap}>
                {console.log(movie)}
                <button className={css.actionButton}>Add to watchlist</button>
                <button className={css.actionButton}>Add to favorite</button>
            </div>
        </div>
        
    </>
    }
    </Link>  
  )
}
