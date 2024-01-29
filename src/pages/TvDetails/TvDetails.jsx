import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Notiflix from "notiflix";
import * as API from '../../services/movies-api'

export const TvDetails = () =>{
    const [series, setSeries] = useState({})
    const {tvId} = useParams()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
     const getMovie = async () =>{
            try{
                const fetchedSeries = await API.getTvDetails(tvId)
                setSeries(fetchedSeries)

            }
            catch(error){Notiflix.Notify.failure('Error')}
     }
     getMovie()
    }, [tvId])

    return (<>
        <h1>{series.name}</h1>
    </>)
}