import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import * as API from '../../../../services/movies-api'
import css from './Seasons.module.css'

export const SeasonDetails = ({seriesId, seasonNumber}) =>{
    const [isOpen, setIsOpen] = useState(false)
    const [season, setSeason] = useState({})

    useEffect(() =>{
        try {
            const fetchSeasonDetails = async()=>{
                const seasonDetails = await API.getTvDetails(seriesId, `/season/${seasonNumber}`)
                setSeason(seasonDetails)
            }
            fetchSeasonDetails()
        } catch (err) {
            console.log(err)
        }
        
    }, [seriesId, seasonNumber])

    
    const handleOpen = () =>{
        setIsOpen(prev=> !prev)
    }
    return (
        <div>
            <button className={css.seasonButton} onClick={handleOpen}>{isOpen ? <FaArrowUp size="1.2em" color="#999"/> : <FaArrowDown size="1.2em" color="#999"/>}</button>
           {isOpen &&
            <div>
                {console.log(season)}
                <ul className={css.episodesList}>
                    {season && season.episodes.map(episode => {
                        return (
                            <Link to={`${seasonNumber}/episodes/${episode.episode_number}`} className={css.episodeItem} key={episode.id}>
                                <h4 className={css.episodeNumber}>{episode.episode_number < 10 ? `0${episode.episode_number}` : episode.episode_number}</h4>
                                <div className={css.episodeImgWrap}>
                                    {episode.still_path ? <img className={css.episodeImg} src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}  alt="" /> : <div className={css.imgBanner}></div>}
                                    <div className={css.imgOverlay}>
                                    </div>
                                    <div className={css.iconWrap}><FaRegCirclePlay color="white"/></div>
                                </div>
                                <div className={css.episodeInfoWrap}>
                                    <div className={css.episodeNameWrap}>
                                        <h5 className={css.episodeName}>{episode.name}</h5>
                                        <span className={css.episodeTime}>{episode.runtime} min</span>
                                    </div>
                                    <p className={css.episodeDesc}>{episode.overview}</p>
                                </div>
                            </Link>
                        )
                    })}
                </ul>
            </div>}
        </div>
    )
}