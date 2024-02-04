import Cast from 'components/DetailsComponents/Cast/Cast'
import css from './DetailsInfo.module.css'
import { Link } from 'react-router-dom';
import { ArticleInfo } from './ArticleInfo';
import VideosSlider from './VideosSlider';
import { Seasons } from './Seasons/Seasons';


export const DetailsInfo = ({movie, movieVids}) =>{

    
    return(
        <div className={css.infoContainer}>
            <div className={css.mainInfo}>
                <div className={css.mainInfoBox}>
                    <span>Description</span>
                    <p className={css.mainBoxInfoText}>{movie.overview}</p>
                </div>
                {movie.name &&
                 <div className={css.mainInfoBox}>
                    <Seasons tv={movie}/>
                </div>}
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
            <ArticleInfo movie={movie}/>
            
        </div>
    )
}