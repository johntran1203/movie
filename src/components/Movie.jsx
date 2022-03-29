function Movie({movieInfo}) {
    return (
        <main>
        <img src={movieInfo.Poster} alt={movieInfo.Title}/>
        <h3>Title: {movieInfo.Title}</h3>
        <p>Release date: {movieInfo.Released}</p>
      </main>
    )
}

export default Movie