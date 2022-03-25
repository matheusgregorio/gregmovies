import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { APIKey } from '../../config/key'
import { Container } from './styles'

function Details() {
  const { id } = useParams()
  console.log(id)

  const [movie, setMovie] = useState({})
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1&language=pt-BR`
    )
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, overview, release_date, vote_average } =
          data

        const movie = {
          id,
          titulo: title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          dataLancamento: release_date,
          nota: vote_average
        }
        console.log(movie)
        setMovie(movie)

        console.log(data)
        //setMovies(data.results)
      })
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.titulo}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Data de Lançamento: {movie.dataLancamento}
          </span>
          <span className="release-date">Nota: {movie.nota}</span>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Details
