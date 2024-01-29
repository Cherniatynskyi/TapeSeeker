import { useState, useEffect} from "react"
import * as API from '../../services/movies-api'
import { SearchBar } from "../../components/SearchBar/SearchBar"
import {useSearchParams, useLocation } from 'react-router-dom'
import { MoviesList } from "components/MoviesList/MoviesList"
import css from './Movies.module.css'
import Notiflix from 'notiflix';
import { FaArrowUp } from "react-icons/fa";

const Movies = () =>{
    const [searchResult, setSearchResult] = useState(null)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    const type = location.pathname === "/movies" ? "movie" : "tv"
    const [typeParam, setTypeParam] = useState(type)

    
    useEffect(() => {
        setTypeParam(prev =>{
            if(prev !== type){
                console.log("change")
                setPage(1)
                setSearchResult(null)
            }
            return type
        })
        const q = searchParams.get('q')    
                const getMoviesList = async()=>{
                    try{ 
                        const fetchedMovie = await API.getMoviesList(typeParam === "movie" ? `/trending/movie/day` : `/trending/tv/day`, page)  
                             
                        setSearchResult(prevState => {
                            const prevVal = prevState?.map(value => value.id)
                            const currVal = fetchedMovie?.map(value => value.id)
                            const isExist = prevVal?.find(el => currVal.includes(el))
                    
                            if(prevState){
                                if(isExist && page < 3){
                                    console.log('Cleared', page)
                                    setPage(1)
                                    return 
                                }
      
                                if((typeParam === "movie" && prevState[0].title) || (typeParam ==="tv" && prevState[0].name)){
                                    console.log("PAGIN", page)
          
                                    return [...prevState, ...fetchedMovie]
                                }
                            }
                            return fetchedMovie
                            }) 
                    }
                    catch(error){Notiflix.Notify.failure('Error')}
                }
                const getMoviesByQuery = async(q) =>{  
                    try{
                        const fetchedMovie = await API.searchMovies(q, page, type)
                        setSearchResult(prevState => prevState? [...prevState, ...fetchedMovie] : fetchedMovie)
                    }
                    catch(error){Notiflix.Notify.failure('Error')}
                }
                if(!q){
                    getMoviesList()
                    return
                }
                getMoviesByQuery(q)
       }, [searchParams, page, location, typeParam, type])

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

