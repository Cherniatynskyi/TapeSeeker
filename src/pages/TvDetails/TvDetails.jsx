import {useState, useEffect, Suspense} from 'react'
import { useParams, Outlet } from 'react-router-dom'
import Notiflix from "notiflix";
import * as API from '../../services/movies-api'

import { DetailsHero } from 'components/DetailsComponents/DetailsHero/DetailsHero';
import { DetailsInfo } from 'components/DetailsComponents/DetailsInfo/DetailsInfo';

export const TvDetails = () =>{
    const [series, setSeries] = useState({})
    const [seriesVids, setSeriesVids] = useState({})
    const {tvId} = useParams()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        const getMovie = async () =>{
            try{
                const fetchedSeries = await API.getTvDetails(tvId)
                setSeries(fetchedSeries)

                const movieVideos = await API.getTvDetails(tvId, '/videos')
                setSeriesVids(movieVideos)

            }
            catch(error){Notiflix.Notify.failure('Error')}
     }
     getMovie()
    }, [tvId])

    return (<>
        <DetailsHero movie={series} movieVids = {seriesVids}/>
        <DetailsInfo movie={series} movieVids = {seriesVids}/>

        <Suspense fallback={<div>Loading....</div>}>
                <Outlet/>
        </Suspense>
    </>)
}