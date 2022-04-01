
import './App.css';
import { useState, useEffect} from 'react'
import axios from 'axios';
import Movie from './components/Movie';

function App() {
  const [search, setSearch] = useState('shrek')
  const [infoMovie, setInfoMovie] = useState({})
  const [input, setInput] = useState('')
 
    // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=61a95ef8
    // 
  
    useEffect(()=> {

      async function movieDetail() {
        const resp = await axios.get(`http://www.omdbapi.com/?t=${search}&apikey=61a95ef8`)
        const nameOfMovie = resp.data
       setInfoMovie(nameOfMovie)

       
      }
      movieDetail()
    },[search])

    function handleSubmit(e) {
      e.preventDefault();
      setSearch(input)
      setInput('')
    }

  return (
    <div>
      {/* <h2>Movie: {infoMovie.Title}</h2>
      <img src={infoMovie.Poster} alt={infoMovie.Title} />
      <h3>Release Year: {infoMovie.Year}</h3> */}
      <Movie movieInfo={infoMovie}/>
      <form onSubmit={handleSubmit}>
          <input value= {input} onChange={(e)=>{setInput(e.target.value)}}/>
      </form>
    </div>
  );
}

export default App;
