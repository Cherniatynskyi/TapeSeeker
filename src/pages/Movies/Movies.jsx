import { useState, useEffect} from "react"
import * as API from '../../services/movies-api'
import { SearchBar } from "../../components/SearchBar/SearchBar"
import {useSearchParams, useLocation } from 'react-router-dom'
import { MoviesList } from "components/MoviesList/MoviesList"
import css from './Movies.module.css'
import Notiflix from 'notiflix';
import { FaArrowUp } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { Link } from "react-router-dom"

const Movies = () =>{
    const [mediaType, setMediaType] = useState(true)
    const [listStyle, setListStyle] = useState(true)
    const [searchResult, setSearchResult] = useState(null)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    const type = location.pathname === "/movies" ? "movie" : "tv"


    useEffect(() =>{
        const q = searchParams.get('q')  
        const fetchContent = async() =>{
            if(type === "movie"){
                const fetchedMovie = await API.getMoviesList(`/trending/movie/day`, page)
                setSearchResult(fetchedMovie)
            }
            else {
                const fetchedMovie = await API.getMoviesList(`/trending/tv/day`, page)
                setSearchResult(fetchedMovie)
            }
        }
        const getMoviesByQuery = async(q) =>{  
            try{
                const fetchedMovie = await API.searchMovies(q, page, type)
                if(fetchedMovie.length === 0){
                    Notiflix.Notify.failure('No more movies')
                    return
                }
                setSearchResult(fetchedMovie)
            }
            catch(error){Notiflix.Notify.failure('Error')}
        }
        if(q){
            getMoviesByQuery(q)
            return
        }
        fetchContent()
    })


    const onBackToTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth",});
    }
    
    const formHandler = ({ query }) => {
        setPage(1)
        setSearchParams({q: query})
        setSearchResult(null)
    }

    const handleMediaType =(e)=>{
        if((mediaType && e.target.textContent === "Movies") || (!mediaType && e.target.textContent === "Shows")){
           return 
        }
        setSearchResult(null)
        setPage(1)
        setMediaType(prevState => !prevState)
        
    }

    const handleChangePage = (e)=>{
        onBackToTop()
        if(e.target.id === 'dec'){
            setPage(prev => prev - 1)  
        }
        else{
            setPage(prev => prev + 1) 
        }
    }

    const handleListChange = (e)=>{
        if((listStyle && e.target.id === "grid") || (!listStyle && e.target.id === "list")){
            return 
         }
         setListStyle(prev => !prev)
         console.log("Change style")
         console.log(searchResult)
    }
    
    return ( 
        <>
            <div className={css.moviesHeader}>
                <SearchBar onSubmit={formHandler}/>
                <div className={css.mediaButtonContainer}>
                    <Link to="/movies" onClick={(e)=>handleMediaType(e)} className={`${css.mediaButton} ${type === "movie" && css.mediaButtonActive}`}>Movies</Link>
                    <Link to="/tv" onClick={(e)=>handleMediaType(e)} className={`${css.mediaButton} ${type === "tv" && css.mediaButtonActive}`}>Shows</Link>
                </div>
                <ul className={css.filterMenu}>
                        <li>genre</li>
                        <li>year filter</li>
                        <li>rating</li>
                </ul>
                <ul className={css.listStyle}>
                    <button onClick={handleListChange} id="grid" className={`${css.listStyleButton} ${listStyle && css.styleButtonActive}`}><IoGrid /></button>
                    <button onClick={handleListChange} id="list" className={`${css.listStyleButton} ${!listStyle && css.styleButtonActive}`}><FaList /></button>
                </ul>
            </div>
            <MoviesList movies={searchResult} location={location} currentPage={page} listStyle={listStyle}/> 
            <div className={css.pagination}>
                <button className={css.paginationButton} disabled={page === 1} onClick={(e)=>handleChangePage(e)} id="dec">Back</button>
                <span className={css.paginationPage}>{page}</span>
                <button className={css.paginationButton} onClick={(e)=>handleChangePage(e)} id="inc">Next</button>
            </div>
            <button onClick={onBackToTop} className={css.backToTopButton}><FaArrowUp size="2em"/></button>
            </>)
}   

export default Movies

