import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


import MoviesSearchForm from "./MoviesSearchForm/MoviesSearchForm";
import MoviesSearchList from "./MoviesSearchList/MoviesSearchList";

import { searchMovies } from "../../api/movies";

import styles from "./movies-search.module.css";

const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search");

    useEffect(()=> {
        const fetchSearchMovies = async ()=> {
            try {
                setLoading(true);
                const { data } = await searchMovies(search);
                setMovies(data.results?.length ? data.results : []);
            }
            catch (error) {
               setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        if(search) {
            fetchSearchMovies();
        }
    }, [search])

    const handleSearch = ({ search }) => {
        setSearchParams({search});
        setMovies([]);
    }


    const isMovies = Boolean(movies.length);


    return (
        <>
            <MoviesSearchForm onSubmit={handleSearch} />
            {error && <p className={styles.error}>{error}</p>}
            {loading && <p>...Loading</p>}
            {isMovies && <MoviesSearchList items={movies} />}
        </>
    )
}

export default SearchMovies;