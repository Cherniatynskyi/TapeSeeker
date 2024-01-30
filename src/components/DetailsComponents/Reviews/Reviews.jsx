import { useParams, Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import * as API from '../../../services/movies-api'
import { FaUser } from "react-icons/fa";
import { PiMaskSadFill } from "react-icons/pi";
import css from './Reviews.module.css'


const Reviews = () =>{
    const {movieId} = useParams()
    const {tvId} = useParams()
    const [reviews, setReviews] = useState([])
    const effectRun = useRef(true)

    useEffect(() => {
        const getMovie = async () =>{
           if(effectRun.current){
            effectRun.current = false
               try{
                   if(movieId){
                        const fetchedMovie = await API.getMovieDetails(movieId, '/reviews')
                        setReviews(fetchedMovie.results)
                   }
                   else{
                        const fetchedMovie = await API.getTvDetails(tvId, '/reviews')
                        setReviews(fetchedMovie.results)
                   }
               }
               catch(error){alert('error')}
           }
        }
        getMovie()
       }, [movieId, tvId])

       const handleHideReviews =()=>{
            setReviews([])
            window.scrollTo({top: 0, left: 0, behavior: "smooth"});
       }

    return (
        <div>
            <ul className={css.reviewsContainer}>
                {reviews.length !== 0 ? reviews.map(review => {
                    const ratingBarStyle = {
                        background: 
                            `radial-gradient(closest-side, #1A1A1A 79%, transparent 80% 100%), conic-gradient(rgb(243, 208, 86) ${review?.author_details.rating && review.author_details.rating.toFixed(1) * 10}%, #2f2f2f 0)`
                    }

                    const {username, rating, avatar_path} = review.author_details
                    return(
                    <li className={css.reviewBox} key={review.id}>
                        <div className={css.reviewTitleWrap}>
                            <div className={css.userAvatar}>
                                {avatar_path ? <img src={`https://image.tmdb.org/t/p/w185${avatar_path}`} alt="" /> : <FaUser color="white" size="2em"/>}
                                
                            </div>
                            <div className={css.userInfoWrap}>
                                <p className={css.authorName}>{review.author}</p>
                                <span className={css.authorUsername}>@{username}</span>
                            </div>
                            <div style={ratingBarStyle} className={css.progressBar}>
                                <span>{rating?.toFixed(1)}</span>
                            </div>
                        </div>
                        <p className={css.reviewText}>{review.content}</p>
                    </li>)
                }): <p className={css.noReviewsText}>No reviews yet <PiMaskSadFill size="1.2em" color="white"/></p>}
            </ul>
            <Link className={css.closeReviewsButton} to={movieId ? `/movies/${movieId}` : `/tv/${tvId}`} onClick={handleHideReviews}>Close</Link>
        </div>
    )
}   

export default Reviews