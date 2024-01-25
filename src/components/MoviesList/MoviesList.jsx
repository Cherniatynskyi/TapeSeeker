import css from './MoviesList.module.css'
import {Link} from 'react-router-dom'
import { CiCalendarDate } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import { MdLanguage } from "react-icons/md";

export const MoviesList = ({movies, location}) =>{

    return (<ul className={css.moviesList}>
        {movies ? movies.map(movie => {
            if(movie.release_date){
                var splitted = movie.release_date.split("-")   
            }
            return(
             <Link className={css.moviesListItem} key={movie.id} to={location.pathname === '/' ? `movies/${movie.id}`: `${movie.id}`} state={{from: location}}>
                <li>
                    <img className={css.img} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: 'https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg'} alt={movie.title}/>
                    <p className={css.movieTitle} >{movie.title ? movie.title : movie.name}</p>
                        <div className={css.thumbsContainer}>
                            <span className={css.thumb}> <CiCalendarDate size="1.2em" /> {splitted ? splitted[0] : '2023'}</span>
                            <span className={css.thumb}> <MdStar size="1.2em" />{movie.vote_average.toFixed(1)}</span>
                            <span className={css.thumb}> <MdLanguage size="1.2em" />{movie.original_language}</span>
                        </div>
                </li>
            </Link>)
        }): <h1 className={css.title}>Search for Movies</h1>}
    </ul>  )
}


