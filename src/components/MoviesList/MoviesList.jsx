import css from './MoviesList.module.css'
import {Link} from 'react-router-dom'

export const MoviesList = ({movies, location}) =>{

    return (<ul className={css.moviesList}>
        {movies ? movies.map(movie => {
            return(
             <Link key={movie.id} to={location.pathname === '/' ? `movies/${movie.id}`: `${movie.id}`} state={{from: location}}>
                <li>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
                </li>
            </Link>)
        }): <h1 className={css.title}>Search for Movies</h1>}
    </ul>  )
}


