import css from './Seasons.module.css'
import { SeasonDetails } from './SeasonDetails';

export const Seasons = ({tv})=>{

    return(  
            <ul className={css.seasonsList}>
                {tv.seasons.map(season => {
                    if(season.episode_count > 30){
                        return null
                    }
                    return (
                    <div key={season.id} className={css.seasonItem}>
                        <div className={css.seasonItemContent} key={season.id}>
                                <h3 className={css.seasonTitle}>Season {`0${season.season_number}`}</h3>
                                <p className={css.seasonEpisodsCount}>{season.episode_count} Episodes</p>
                        </div>
                        <SeasonDetails seriesId={tv.id} seasonNumber={season.season_number}/>  
                    </div>
                    )
                })}
            </ul>
    )
}