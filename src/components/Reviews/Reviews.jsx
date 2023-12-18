import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import * as API from '../../services/movies-api'
import css from './Reviews.module.css'


const Reviews = () =>{
    const {movieId} = useParams()
    const [reviews, setReviews] = useState([])
    const effectRun = useRef(true)

    useEffect(() => {
        const getMovie = async () =>{
           if(effectRun.current){
            effectRun.current = false
               try{
                   const fetchedMovie = await API.getMovieDetails(movieId, '/reviews')
                   setReviews(fetchedMovie.results)
               }
               catch(error){alert('error')}
           }
        }
        getMovie()
       }, [movieId])

    return (
        <div>
            <ul className={css.reviewsContainer}>
                {reviews.length !== 0 ? reviews.map(review => {
                    return(<li key={review.id}>
                        <p className={css.reviewAuthor}>{review.author}</p>
                        <p className={css.reviewText}>{`${review.content}`}</p>
                    </li>)
                }): <p>No reviews yet</p>}
            </ul>
        </div>
    )
}   

export default Reviews