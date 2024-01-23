import css from './DetailsHero.module.css'
import { Link } from 'react-router-dom'
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRef} from 'react';
import { useLocation } from 'react-router-dom';

export const DetailsHero = ({movie})=>{
    const location = useLocation()
    const backLinkLocation = useRef(location.state?.from ?? '/')

    return(<>
                    <div>
                        {console.log(movie)}
                        <div className={css.heroContainer} style={{backgroundImage: `linear-gradient(0deg, #141414 10%, rgba(20, 20, 20, .7) 100%), url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`}}>
                            <Link className={css.backButton} to={backLinkLocation.current}><IoMdArrowRoundBack /> Back to movies</Link>
                            <div className={css.posterWrap}>
                                <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            </div>
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
                            <div className={css.companiesContainer}>
                                {movie.production_companies && movie.production_companies.map(comp =>{
                                    return <img key={comp.id} className={css.compLogos} src={`https://image.tmdb.org/t/p/w300${comp.logo_path}`} alt="" />
                                })}
                            </div>
                        </div>
                    </div>
</>)
}



