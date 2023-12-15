import { lazy} from 'react';
import {Route, Routes} from 'react-router-dom'
import { Cast } from '../pages/Cast/Cast';
import { Reviews } from '../pages/Reviews/Reviews';
import { Layout } from './Layout';

const HomePage = lazy(() => import ('../pages/HomePage/HomePage'))
const Movies = lazy(() => import ('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import ('../pages/MovieDetails/MovieDetails'))

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
        </Route>
      </Routes>

  );
}

export default App;
