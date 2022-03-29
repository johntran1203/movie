
import './App.css';
import { useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const [movieInfo, setMovieInfo] = useState({})
  const [search, setSearch] = useState('shrek')
  const [input, setInput] = useState('')

  useEffect(() => {
    // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=61a95ef8
 

    async function fetchMovieData () {
      const movieUrl = `http://www.omdbapi.com/?t=${search}&apikey=61a95ef8`
      const response = await axios.get(movieUrl)
      setMovieInfo(response.data)
    
    }
    
    fetchMovieData()

  }, [search])

  function handleSubmit(e) {
    e.preventDefault()
    setSearch(input)
    // console.log('hi')
    setInput('')
  }
  return (
    <div className="App">
    <main>
      <img src={movieInfo.Poster} alt={movieInfo.Title}/>
      <h3>Title: {movieInfo.Title}</h3>
      <p>Release date: {movieInfo.Released}</p>
    </main>

    <form onSubmit={handleSubmit} >
      <label htmlFor='movieIfno'>Title: </label>
      <input id='movieInfo'  value= {input} onChange={(e)=>{setInput(e.target.value)}}/>
    </form>
    </div>
  );
}

export default App;
