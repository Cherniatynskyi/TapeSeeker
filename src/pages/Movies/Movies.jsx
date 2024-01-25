import { useState, useEffect, useRef} from "react"
import * as API from '../../services/movies-api'
import { SearchBar } from "../../components/SearchBar/SearchBar"
import {useSearchParams, useLocation} from 'react-router-dom'
import { MoviesList } from "components/MoviesList/MoviesList"
import Notiflix from 'notiflix';

const Movies = () =>{
    const [searchResult, setSearchResult] = useState(null)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    const firstRender = useRef(true)
    
    useEffect(() => {
        const q = searchParams.get('q')    
                const getMoviesList = async()=>{
                    try{   
                        if(firstRender.current === true){
                            const fetchedMovie = await API.getMoviesList(`/movie/popular`, page)
                            setSearchResult(prevState => prevState? [...prevState, ...fetchedMovie] : fetchedMovie)
                            console.log("movies")
                        }
                        firstRender.current = true
                        return 
                  
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
                    return
                }
                getMoviesByQuery(q)
        return()=>{
            firstRender.current = true
        }

       }, [searchParams, page])

    

    
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
            <button onClick={handlePageChange}>load more</button>
        </div>)
}   

export default Movies

