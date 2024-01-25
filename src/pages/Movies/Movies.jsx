import { useState, useEffect} from "react"
import * as API from '../../services/movies-api'
import { SearchBar } from "../../components/SearchBar/SearchBar"
import {useSearchParams, useLocation} from 'react-router-dom'
import { MoviesList } from "components/MoviesList/MoviesList"
import css from './Movies.module.css'
import Notiflix from 'notiflix';
import { FaArrowUp } from "react-icons/fa";

const Movies = () =>{
    const [searchResult, setSearchResult] = useState(null)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();

    
    useEffect(() => {
        const q = searchParams.get('q')    
                const getMoviesList = async()=>{
                    try{   
                        const fetchedMovie = await API.getMoviesList(`/movie/popular`, page)         
                        setSearchResult(prevState => prevState ? [...prevState, ...fetchedMovie] : fetchedMovie)
              
                    }
                    catch(error){Notiflix.Notify.failure('Error')}
                }
                const getMoviesByQuery = async(q) =>{  
                    try{
                        const fetchedMovie = await API.searchMovies(q, page)
                        setSearchResult(prevState => prevState? [...prevState, ...fetchedMovie] : fetchedMovie)
                        console.log("Fetched")
                    }
                    catch(error){Notiflix.Notify.failure('Error')}
                }
                if(!q){
                    getMoviesList()
                    console.log(q)
                    return
                }
                getMoviesByQuery(q)
       }, [searchParams, page])

    const onBackToTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth",});
    }
    
    const formHandler = ({ query }) => {
        setPage(1)
        setSearchParams({q: query})
        setSearchResult(null)
    }

    const handlePageChange = () =>{
        setPage(prev => prev+1)
    }
    
    return ( 
        <div>
            <SearchBar onSubmit={formHandler}/>
            <MoviesList movies={searchResult} location={location}/> 
            <button className={css.loadButton} onClick={handlePageChange}>load more</button>
            <button onClick={onBackToTop} className={css.backToTopButton}><FaArrowUp size="2em"/></button>
        </div>)
}   

export default Movies

