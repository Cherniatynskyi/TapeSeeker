import Cast from 'components/Cast/Cast'
import css from './DetailsInfo.module.css'
import { FaRegCalendar } from "react-icons/fa6";


export const DetailsInfo = ({movie}) =>{

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
                <div className={css.mainInfoBox}>
                    <span>Cast</span>
                    <Cast></Cast>
                </div>
                <div className={css.reviewsContainer}></div>
            </div>
            <div className={css.articleInfo}>
                <div className={css.articleBlock}>
                    <p><FaRegCalendar /> Released year</p>
                    <span className={css.detailsYear}>{ movie?.release_date && movie.release_date.split('-')[0]}</span>
                </div>
                <div className={css.articleBlock}>
                    <p>Rating</p>
                    <div>
                        <div style ={ratingBarStyle} className={css.progressBar}>
                            <span>{movie.vote_average && movie.vote_average.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
                <div className={css.articleBlock}>
                    <p>genres</p>
                    <ul></ul>
                </div>
                <div className={css.articleBlock}>
                    <p>Production countries</p>
                    <ul></ul>
                </div>
                <div className={css.articleBlock}>
                    <p>Production studios</p>
                    <ul></ul>
                </div>
            </div>
        </div>
    )
}