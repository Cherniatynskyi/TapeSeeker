import css from './DetailsInfo.module.css'
import { FaRegCalendar } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { IoLanguageSharp } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";

export const ArticleInfo = ({movie}) =>{

    const ratingBarStyle = {
        background: 
            `radial-gradient(closest-side, #1A1A1A 79%, transparent 80% 100%), conic-gradient(rgb(243, 208, 86) ${movie.vote_average && movie.vote_average.toFixed(1) * 10}%, #2f2f2f 0)`
    }
    return (
        <div className={css.articleInfo}>
                <div className={css.articleBlock}>
                    <p className={css.articleTitle}><FaRegCalendar /> Released year</p>
                    <span className={css.detailsYear}>{ movie?.release_date ? movie?.release_date?.split('-')[0] : movie?.last_air_date?.split('-')[0]}</span>
                </div>
                <div className={css.articleBlock}>
                    <p className={css.articleTitle}><IoStarOutline />Rating</p>
                    <div>
                        <div style ={ratingBarStyle} className={css.progressBar}>
                            <span>{movie?.vote_average?.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
                <div className={css.articleBlock}>
                    <p className={css.articleTitle}><IoGridOutline />genres</p>
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
                    <p className={css.articleTitle}><IoLanguageSharp />Languages</p>
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
                    <p className={css.articleTitle}>Production studios</p>
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
    )
}