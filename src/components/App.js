import { lazy} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import  Layout  from './Layout';
import { TvDetails } from '../pages/TvDetails/TvDetails';

const HomePage = lazy(() => import ('../pages/HomePage/HomePage'))
const Movies = lazy(() => import ('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import ('../pages/MovieDetails/MovieDetails'))
const Reviews = lazy(() => import('./DetailsComponents/Reviews/Reviews'))
const EpisodeDetails = lazy(() => import('../pages/EpisodeDetails/EpisodeDetails'))

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
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
