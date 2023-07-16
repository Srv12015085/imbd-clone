
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './pages/home/home'
import Cards from './components/header/card/card';
import MovieList from './components/header/movieList/movieList'
import Movie from './pages/movieDetail/movie'
function App() {
  return (
    <div className="App">
     <Router>
     <Header />
    
     <Routes>
      <Route index element={<Home />}></Route>
      <Route path="movie/:id" element={<Movie />}></Route>
      <Route path="movies/:type" element={<MovieList />}></Route>
      <Route path="/*" element={<h1>Error Page</h1>}></Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
