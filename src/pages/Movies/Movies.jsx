import { useState, useEffect} from "react"
import * as API from '../../services/movies-api'
import { SearchBar } from "../../components/SearchBar/SearchBar"
import {useSearchParams, useLocation} from 'react-router-dom'
import { MoviesList } from "components/MoviesList/MoviesList"
import Notiflix from 'notiflix';

const Movies = () =>{
    const [searchResult, setSearchResult] = useState(null)
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const q = searchParams.get('q')
        const getMovie = async () =>{
           if(!q){
            return
           }
               try{
                   const fetchedMovie = await API.searchMovies(q)
                   setSearchResult(fetchedMovie)
                   console.log("Fetched")
               }
               catch(error){Notiflix.Notify.failure('Error')}
        }
        getMovie()
       }, [searchParams])

    const formHandler = ({ query }) => {
        setSearchParams({q: query})
      }

    
    return ( 
        <div>
            <SearchBar onSubmit={formHandler}/>
            <MoviesList movies={searchResult} location={location}/> 
        </div>)
}   

export default Movies

