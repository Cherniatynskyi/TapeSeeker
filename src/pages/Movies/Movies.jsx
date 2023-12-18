import { useState, useEffect, useRef} from "react"
import * as API from '../../services/movies-api'
import { SearchBar } from "../../components/SearchBar/SearchBar"
import {useSearchParams, useLocation} from 'react-router-dom'
import { MoviesList } from "components/MoviesList/MoviesList"

const Movies = () =>{
    const [searchResult, setSearchResult] = useState(null)
    const effectRun = useRef(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q')
    const location = useLocation()

    useEffect(() => {
        const getMovie = async () =>{
           if(effectRun.current){
               try{
                    if(q == null){
                        return
                    }
                   const fetchedMovie = await API.searchMovies(q)
                   setSearchResult(fetchedMovie)
               }
               catch(error){alert('error')}
           }
           effectRun.current = true
        }
        getMovie()
       }, [q])

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

