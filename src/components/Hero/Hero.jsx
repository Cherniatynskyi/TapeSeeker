import css from './Hero.module.css'
import { Link } from 'react-router-dom'

export const Hero = ({movie})=>{


    return(<>
    {movie &&
     <div className={css.heroContainer} style={{backgroundImage: `linear-gradient(0deg, #141414 10%, rgba(20, 20, 20, .3) 100%), url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`}}>
        <div className={css.heroTextContainer}>
            <p>{movie.title}</p>
            <Link className={css.heroButton} to={`/movies/${movie.id}`}> Click to view</Link>
        </div>
    </div>}
</>)
}