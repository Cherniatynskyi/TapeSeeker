import css from '../../components/DetailsComponents/DetailsHero/DetailsHero.module.css'
import css2 from './EpisodeDetails.module.css'
import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState} from 'react'
import * as API from '../../services/movies-api'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
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
            <div>
                <h2>Crew</h2>
                <ul>
                    {episode?.crew?.map(crew => {
                        return (
                            <li key={crew.id}>
                                <p>{crew.job}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}


export default EpisodeDetails