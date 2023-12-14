import {Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import { Movies } from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails'
import { Cast } from '../pages/Cast/Cast';
import { Reviews } from '../pages/Reviews/Reviews';
import { Layout } from './Layout';

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
