import { lazy} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import  Layout  from './Layout';
import { TvDetails } from '../pages/TvDetails/TvDetails';
import { AuthNav } from './Auth/AuthNav';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/Auth/authThunk';
// import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';

const HomePage = lazy(() => import ('../pages/HomePage/HomePage'))
const Movies = lazy(() => import ('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import ('../pages/MovieDetails/MovieDetails'))
const Reviews = lazy(() => import('./DetailsComponents/Reviews/Reviews'))
const EpisodeDetails = lazy(() => import('../pages/EpisodeDetails/EpisodeDetails'))
const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'))

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
      <Routes>
        <Route path='auth/:id' element={<RestrictedRoute element={AuthNav}/>}/>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='profile' element={<ProfilePage/>}/>
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
