import { lazy} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import  Layout  from './Layout';
import { TvDetails } from '../pages/TvDetails/TvDetails';
import { AuthNav } from './Auth/AuthNav';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../redux/Auth/authThunk';
import { getFavoritesThunk, getWatchLaterThunk, getScoredThunk } from '../redux/Movies/moviesThunk';
// import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';

const HomePage = lazy(() => import ('../pages/HomePage/HomePage'))
const Movies = lazy(() => import ('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import ('../pages/MovieDetails/MovieDetails'))
const Reviews = lazy(() => import('./DetailsComponents/Reviews/Reviews'))
const EpisodeDetails = lazy(() => import('../pages/EpisodeDetails/EpisodeDetails'))
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'))
const LibraryPage = lazy(() => import('../pages/LibraryPage/LibraryPage'))

function App() {
  const dispatch = useDispatch()
  const isLogged = useSelector(state => state.auth.access_token)

  useEffect(() => {
    if(isLogged){
      dispatch(fetchCurrentUser())
      dispatch(getFavoritesThunk())
      dispatch(getWatchLaterThunk())
      dispatch(getScoredThunk())
    }
  }, [dispatch, isLogged])

  return (
      <Routes>
        <Route path='auth/:id' element={<RestrictedRoute element={AuthNav}/>}/>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
          <Route path='library' element={<LibraryPage/>}/>
          <Route path='movies' element={<Movies type="/movies"/>}/>
          <Route path='tv' element={<Movies type="/tv"/>}/>
          <Route path='tv/:tvId/:seasonNumber/episodes/:episodeNumber' element={<EpisodeDetails/>}/>
          <Route path='tv/:tvId' element={<TvDetails/>}>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path='movies/:movieId' element={<MovieDetails/>}>
              <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/" replace/>} />
        </Route>
      </Routes>

  );
}

export default App;
