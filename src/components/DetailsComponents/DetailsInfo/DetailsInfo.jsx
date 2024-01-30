import Cast from 'components/DetailsComponents/Cast/Cast'
import css from './DetailsInfo.module.css'
import { Link } from 'react-router-dom';
import { FaRegCalendar } from "react-icons/fa6";
import VideosSlider from './VideosSlider';


export const DetailsInfo = ({movie, movieVids}) =>{

    const ratingBarStyle = {
        background: 
            `radial-gradient(closest-side, #1A1A1A 79%, transparent 80% 100%), conic-gradient(rgb(243, 208, 86) ${movie.vote_average && movie.vote_average.toFixed(1) * 10}%, #2f2f2f 0)`
    }
    
    return(
        <div className={css.infoContainer}>
            <div className={css.mainInfo}>
                <div className={css.mainInfoBox}>
                    <span>Description</span>
                    <p>{movie.overview}</p>
                </div>
                <div className={`${css.mainInfoBox} ${css.castInfoBox}`}>
                    <span>Cast</span>
                    <Cast type={movie.title ? "mov" : "tv"} id={movie.id}></Cast>
                </div>
                <div className={css.mainInfoBox}>
                    <span>Videos</span>
                    <div className={css.VideoSliderWrap}>
                        <VideosSlider movieVids={movieVids}></VideosSlider>
                    </div>
                  
                    
                </div>
                <div className={css.mainInfoBox}>
                    <span>Reviews</span>
                    
                    <Link className={css.reviewsLink} to='reviews'>Click to see reviews</Link>
                    
                </div>
            </div>
            <div className={css.articleInfo}>
                <div className={css.articleBlock}>
                    <p><FaRegCalendar /> Released year</p>
                    <span className={css.detailsYear}>{ movie?.release_date ? movie?.release_date?.split('-')[0] : movie?.last_air_date?.split('-')[0]}</span>
                </div>
                <div className={css.articleBlock}>
                    <p>Rating</p>
                    <div>
                        <div style ={ratingBarStyle} className={css.progressBar}>
                            <span>{movie?.vote_average?.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
                <div className={css.articleBlock}>
                    <p>genres</p>
                    <ul className={css.itemsList}>
                        {movie?.genres?.map(genre =>{
                            return(
                             <div key={genre.id} className={css.itemWrap}>
                                {genre.name}
                            </div>
                        )})}
                    </ul>
                </div>
                <div className={css.articleBlock}>
                    <p>Languages</p>
                    <ul className={css.itemsList}>
                        {movie?.spoken_languages?.map(lang => {
                            return(
                                <div key={lang.name} className={css.itemWrap}>
                                {lang.name}
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className={css.articleBlock}>
                    <p>Production studios</p>
                    <ul className={css.companiesList}>
                        {movie?.production_companies?.map(company => {
                            return(
                                <div key={company.id} className={`${css.itemWrap} ${css.compWrap}`}>
                                     <span className={css.companyName}>{company.name}</span>
                                    <div className={css.imgWrap}>
                                        <img className={css.companyImg} src={company.logo_path ? `https://image.tmdb.org/t/p/w300${company.logo_path}` : `https://pic.onlinewebfonts.com/thumbnails/icons_360869.svg`} alt="" />
                                    </div>
                                </div>         
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}