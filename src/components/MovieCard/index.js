import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails
  return (
    <li className="container d-flex flex-column">
      <img className="img" alt={title} src={posterPath} />
      <div className="d-flex flex-column align-items-center">
        <h1 className="title">{title}</h1>
        <p className="rating">Rating: {voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`} className="mt-auto">
        <button className="btn btn-outline-success" type="button">
          View Details
        </button>
      </Link>
    </li>
  )
}
export default MovieCard
