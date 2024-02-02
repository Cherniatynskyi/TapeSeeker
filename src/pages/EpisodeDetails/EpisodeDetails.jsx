import css from '../../components/DetailsComponents/DetailsHero/DetailsHero.module.css'
import css2 from './EpisodeDetails.module.css'
import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState} from 'react'
import * as API from '../../services/movies-api'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { TrailerModal } from 'components/DetailsComponents/TrailerModal/TrailerModal';

const EpisodeDetails = () =>{
    const location = useLocation()
    const [episode, setEpisode] = useState({})
    const [videos, setVideos] = useState({})
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const pathnames = location.pathname.split('/')

    useEffect(() =>{
        window.scrollTo({top: 0, left: 0});
        const pathnames = location.pathname.split('/')
        try {
            const fetchSeasonDetails = async()=>{
                const episodeDetails = await API.getTvDetails(pathnames[2], `/season/${pathnames[3]}/episode/${pathnames[5]}`)
                setEpisode(episodeDetails)
                console.log(episodeDetails)

                const episodeVideos = await API.getTvDetails(pathnames[2], `/season/${pathnames[3]}/videos`)
                setVideos(episodeVideos)
        
            }
            fetchSeasonDetails()
        } catch (err) {
            console.log(err)
        }
    }, [location])

    const openModal = () =>{
        setModalIsOpen(true)
        console.log(videos)
         
      }
  
      const closeModal = () => {
        setModalIsOpen(false)
        
     }

    return(
        
        <>
            <div className={css.heroContainer} style={{backgroundImage: `linear-gradient(0deg, #141414 10%, rgba(20, 20, 20, .7) 100%), url("https://image.tmdb.org/t/p/original${episode.still_path}")`}}>
                <Link className={css.backButton} to={`/${pathnames[1]}/${pathnames[2]}`}><IoMdArrowRoundBack /> Back to episodes</Link>
                <div className={css.heroTextContainer}>
                    <h2 className={css.heroTitle}>{episode.name}</h2>
                    <p className={css.heroDesc}>{episode.overview}</p>
                    <button onClick={openModal}  className={css.heroButton}><FaCirclePlay size="1.2em"/>View Season Trailer</button>
                    <span className={css2.runtime}>{episode.runtime} min</span>
                    <div className={css2.heroOptions}>
                        <button className={css.heroOptionItem}><FaRegHeart className={css.heroIcon} size="1.3em" /></button>
                        <button className={css.heroOptionItem}><FaRegClock className={css.heroIcon}  size="1.3em" /></button>
                        <button className={css.heroOptionItem}><AiOutlineLike className={css.heroIcon}  size="1.3em" /></button>
                    </div>
                    </div>
                    {modalIsOpen && <TrailerModal onClose={closeModal} modalVid={videos.results[videos.results.length -1 ]}/>}
            </div>
            <h2 className={css2.crewTitle}>Crew</h2>
            <div className={css2.episodeContent}>
                <ul className={css2.crewList}>
                    {episode?.crew?.map(crew => {
                        return (
                            <li className={css2.crewItemWrap} key={crew.id}>
                                <h3 className={css2.crewJob}>{crew.job}</h3>
                                <div className={css2.itemContent}>
                                    {crew.profile_path ? <img className={css2.crewImg} src={`https://image.tmdb.org/t/p/original${crew.profile_path}`} alt="" /> : <div className={css2.layoutImgWrap}><IoPersonSharp size="2em" color='#262626'/></div>}
                                    <p className={css2.crewName}>{crew.name}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className={css2.crewArticle}>
                        <h3 className={css2.articleTitle}>{episode.name}</h3>
                        <p className={css2.articleText}>Season: {episode.season_number}</p>
                        <p className={css2.articleText}>Episode: {episode.episode_number}</p>
                        <p className={css2.articleText}>Score: {episode.vote_average?.toFixed(1)}</p>
                </div>
            </div>
        </>
    )
}


export default EpisodeDetails