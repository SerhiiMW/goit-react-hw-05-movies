import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { getTrendingMovies } from "../../api/movies";

import styles from "./trending-movies.module.css";

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                setLoading(true);
                const { data } = await getTrendingMovies();
                setMovies(data.results?.length ? data.results : []);

            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchTrendingMovies();
    }, []);

    const elements = movies.map(({ id, original_title }) => (<li key={id} className={styles.item}>
                                                                <Link to={`/movies/${id}`} state={{from: location}}>{original_title}</Link>
                                                            </li>));

    return (
        <>
            {error && <p className={styles.error}>{error}</p>}
            {loading && <p>...Loading</p>}
            {Boolean(elements.length) && (<ul className={styles.list}>
                {elements}
            </ul>)}
        </>
    )
}

export default TrendingMovies;