import { lazy} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import  Layout  from './Layout';

const HomePage = lazy(() => import ('../pages/HomePage/HomePage'))
const Movies = lazy(() => import ('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import ('../pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='movies' element={<Movies/>}/>
          <Route path='movies/:movieId' element={<MovieDetails/>}>
              <Route path='cast' element={<Cast/>}/>
              <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/" replace/>} />
        </Route>
      </Routes>

  );
}

export default App;
