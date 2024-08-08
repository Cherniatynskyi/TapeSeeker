import { MovieCard } from 'components/MovieCard/MovieCard'
import stylesForGrid from './MoviesList.module.css'
import stylesForList from './MoviesList2.module.css'


export const MoviesList = ({movies, location, listStyle}) =>{

    var css = listStyle ? stylesForGrid : stylesForList

    return (<ul className={css.moviesList}>
        {movies ? movies?.map(movie => {
            let renderedMovie = movie.id ? movie : {
                title: movie.title,
                release_date:movie.year,
                original_language:movie.lng,
                vote_average: Number.parseFloat(movie.rating),
                poster_path: movie.previewUrl
               }
            return <MovieCard key={movie.id ? movie.id : movie._id} movie={renderedMovie} location={location} listStyle={listStyle}></MovieCard>
        }): <h1 className={css.title}>Search for Movies</h1>}
    </ul>  )
}


