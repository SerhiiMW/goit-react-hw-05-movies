import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { getMoviesById } from '../../api/movies';

import styles from './sindle-movie-details.module.css';

const SingleMovieDetails = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const location = useLocation();

  const from = location.state?.from || '/';

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const { data } = await getMoviesById(id);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const goBack = () => navigate(from);

  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={goBack} className={styles.backBtn} type="button">
        Go back
      </button>
      {movie && (
        <>
          <div className={styles.movieWrapper}>
            <img
              className={styles.imgMovie}
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className={styles.textWrapper}>
              <h2>
                {movie.title}({movie.release_date})
              </h2>
              <p>User score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3 className={styles.genresTitle}>Genres</h3>
              <div className={styles.genres}>
                {movie.genres.map(({ id, name }) => (
                  <li key={id} className={styles.genresList}>
                    {name}
                  </li>
                ))}
              </div>
            </div>
          </div>
          <p className={styles.information}>Additional information</p>
          <ul className={styles.castReviewsList}>
            <Link to="cast" state={{ from }}>
              Cast
            </Link>
            <Link to="reviews" state={{ from }}>
              Reviews
            </Link>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default SingleMovieDetails;
