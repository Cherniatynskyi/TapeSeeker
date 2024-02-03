import { useState, useEffect} from "react"
import * as API from '../../services/movies-api'
import { SearchBar } from "../../components/SearchBar/SearchBar"
import {useSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { MoviesList } from "components/MoviesList/MoviesList"
import Select from 'react-select';
import { genreOptions, filterOptions } from "utils/selectOptions"
import css from './Movies.module.css'
import Notiflix from 'notiflix';

import { FaArrowUp } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { Link } from "react-router-dom"
import { ColorRing } from "react-loader-spinner"

const Movies = () =>{
    const [mediaType, setMediaType] = useState(true)
    const [listStyle, setListStyle] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [searchResult, setSearchResult] = useState(null)
    const [selectedGenre, setSelectedGenre] = useState(genreOptions[0])
    const [selectFilter, setSelectFilter] = useState(filterOptions[0])
    const [page, setPage] = useState(1)
    

    const location = useLocation()
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const type = location.pathname === "/movies" ? "movie" : "tv"



    


    useEffect(() =>{
        
        var q = searchParams.get('q')  
        const fetchContent = async() =>{
            setIsLoading(true)
            if(type === "movie"){
                if(!selectedGenre || selectedGenre?.label === 'All'){
                    const fetchedMovie = await API.getMoviesList(`/discover/movie`, page, selectFilter.value)
                    setSearchResult(fetchedMovie)
                } 
                else{
                    const fetchedMovie = await API.getMoviesByGenre('movie', selectedGenre?.value, selectFilter.value, page)
                    setSearchResult(fetchedMovie.results)
                }
            }
            else {
                if(!selectedGenre || selectedGenre?.label === 'All'){
                    const fetchedMovie = await API.getMoviesList(`/discover/tv`, page, selectFilter.value)
                    
                    setSearchResult(fetchedMovie)
                }
                else{
                    const fetchedMovie = await API.getMoviesByGenre('tv', selectedGenre?.value,selectFilter.value, page)
                    if(fetchedMovie.results.length === 0){
                        Notiflix.Notify.failure(`Could't find shows with this genre`)
                        navigate('/movies')
                        return
                    }
                    setSearchResult(fetchedMovie.results)
                }
            }
            setIsLoading(false)
        }
        const getMoviesByQuery = async(q) =>{  
            try{
                setIsLoading(true)
                const fetchedMovie = await API.searchMovies(q, page, type)
                if(fetchedMovie.length === 0){
                    Notiflix.Notify.failure(`Could't find "${q}"`)
                    navigate('/movies')
                    return
                }
                setSearchResult(fetchedMovie)
                setIsLoading(false)
            }
            catch(error){Notiflix.Notify.failure('Error')}
        }
        if(q){
            getMoviesByQuery(q)
            return
        }
        fetchContent()
        
    }, [page, searchParams, type, navigate, selectedGenre, selectFilter])


    const onBackToTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth",});
    }
    
    const formHandler = ({ query }) => {
        setPage(1)
        setSearchParams({q: query})
        setSearchResult(null)
        setSelectedGenre(null)
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
        if((listStyle && e.currentTarget.id === "grid") || (!listStyle && e.currentTarget.id === "list")){
            return 
         }
         setListStyle(prev => !prev)
         console.log("Change style")
         console.log(searchResult)
    }

    const handleChangeGenre = (e) =>{
        console.log(e)
        setSelectedGenre(e)
        setPage(1)
    }

    const handleChangeFilter = (e) =>{
        console.log(e)
        setSelectFilter(e)
        setPage(1)
    }
    
    return ( 
        <>
             <div className={css.mediaButtonContainer}>
                    <Link to="/movies" onClick={(e)=>handleMediaType(e)} className={`${css.mediaButton} ${type === "movie" && css.mediaButtonActive}`}>Movies</Link>
                    <Link to="/tv" onClick={(e)=>handleMediaType(e)} className={`${css.mediaButton} ${type === "tv" && css.mediaButtonActive}`}>Shows</Link>
                </div>
            {isLoading && <div className={css.loadingOverlay}><div className={css.loadingText}><ColorRing colors={['#F3D056', '#F3D056', '#F3D056', '#F3D056', '#F3D056']}/></div></div>}
            <div className={css.moviesHeader}>
                <SearchBar onSubmit={formHandler}/>

               
                
                <ul  className={css.filterMenu}>
                <li className={css.filterMenuItem}>
                    <span>Genre: </span>
                    <Select
                        placeholder = "All"
                        value = {selectedGenre}
                        onChange={(e)=>handleChangeGenre(e)}
                        options={genreOptions}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 8,
                            colors: {
                            neutral0: 'rgb(33, 33, 33)',
                            neutral20: '#757575',
                            primary25: '#505050',
                            primary: 'rgb(243, 218, 92)',
                            },
                        })}
                        classNames={{
                            control: () => css.control,
                            option: ()=> css.optionsSyles,
                        }}
                        
                    />
                </li>
                <li className={css.filterMenuItem}>
                    <span>Sort by:</span>
                    <Select
                        placeholder = {selectFilter}
                        value = {selectFilter}
                        onChange={(e)=>handleChangeFilter(e)}
                        options={filterOptions}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 8,
                            colors: {
                            neutral0: 'rgb(33, 33, 33)',
                            neutral20: '#757575',
                            primary25: '#505050',
                            primary: 'rgb(243, 218, 92)',
                            },
                        })}
                        classNames={{
                            control: () => css.control,
                            option: ()=> css.optionsSyles,
                        }}
                        
                    />
                </li>
            </ul>
                
                <ul className={css.listStyle}>
                    <button onClick={handleListChange} id="grid" className={`${css.listStyleButton} ${listStyle && css.styleButtonActive}`}><IoGrid /></button>
                    <button onClick={handleListChange} id="list" className={`${css.listStyleButton} ${!listStyle && css.styleButtonActive}`}><FaList /></button>
                </ul>
            </div>
            <MoviesList movies={searchResult} location={location} currentPage={page} listStyle={listStyle}/> 
            {!isLoading && <div className={css.pagination}>
                <button className={css.paginationButton} disabled={page === 1} onClick={(e)=>handleChangePage(e)} id="dec">Back</button>
                <span className={css.paginationPage}>{page}</span>
                <button className={css.paginationButton} onClick={(e)=>handleChangePage(e)} id="inc">Next</button>
            </div>}
            <button onClick={onBackToTop} className={css.backToTopButton}><FaArrowUp size="2em"/></button>
            </>)
}   

export default Movies

