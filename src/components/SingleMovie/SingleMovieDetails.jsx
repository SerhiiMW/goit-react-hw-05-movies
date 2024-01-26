import { useState, useEffect } from "react";
import { Link, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";

import { getMoviesById } from "../../api/movies";

import styles from "./sindle-movie-details.module.css";
// import Reviews from "pages/Reviews/Reviews";

const SingleMovieDetails = () => {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    // const id = '504949';
    const location = useLocation();

    const from = location.state?.from || "/";

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                const { data } = await getMoviesById(id);
                setMovie(data);
                // console.log(data)
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchMovie();
    }, []);

    const goBack = () => navigate(from);

    return (
        <div>
            {loading && <p>...Loading</p>}
            {error && <p>Error: {error}</p>}
            <button onClick={goBack} type="button">Go back</button>
            {movie && (
                <>
                    <img className={styles.imgMovie} src={movie.backdrop_path} alt="" />
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                    <p>{movie.overview}</p>
                    <p>{movie.vote_average}</p>
                    {/* <p>{movie.genres.map(name)}</p> */}
                    <ul className={styles.castReviewsList}>
                    <Link to="cast" state={{from}}>Cast</Link>
                    <Link to="reviews" state={{from}}>Reviews</Link>
                    </ul>
                    <Outlet />
                </>
            )}
        </div>
    )
}

export default SingleMovieDetails;