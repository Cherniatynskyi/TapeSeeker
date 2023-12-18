import { useState, useEffect, useRef} from "react"
import * as API from '../../services/movies-api'
import { SearchBar } from "../../components/SearchBar/SearchBar"
import {useSearchParams, useLocation} from 'react-router-dom'
import { MoviesList } from "components/MoviesList/MoviesList"

const Movies = () =>{
    const [searchResult, setSearchResult] = useState(null)
    const effectRun = useRef(false)
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q')

    useEffect(() => {
        const getMovie = async () =>{
           if(effectRun.current){
            console.log(searchParams.get('q'))
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
       }, [q, searchParams])

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

