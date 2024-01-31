import css from './EpisodeDetails.module.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as API from '../../services/movies-api'

const EpisodeDetails = () =>{
    const location = useLocation()
    const [episodeDetails, setEpisodeDetails] = useState({})

    useEffect(() =>{
        window.scrollTo({top: 0, left: 0});
        const pathnames = location.pathname.split('/')
        try {
            const fetchSeasonDetails = async()=>{
                const seasonDetails = await API.getTvDetails(pathnames[2], `/season/${pathnames[3]}/episode/${pathnames[5]}`)
                setEpisodeDetails(seasonDetails)
            }
            fetchSeasonDetails()
        } catch (err) {
            console.log(err)
        }
    }, [location.pathname])

    return(
        <>
        <h1 className={css.title}>{episodeDetails.name}</h1>
        </>
    )
}


export default EpisodeDetails