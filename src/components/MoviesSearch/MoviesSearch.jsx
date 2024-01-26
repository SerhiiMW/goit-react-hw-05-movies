import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Button from "../Button/Button";

import MoviesSearchForm from "./MoviesSearchForm/MoviesSearchForm";
import MoviesSearchList from "./MoviesSearchList/MoviesSearchList";

import { searchMovies } from "../../api/movies";

import styles from "./movies-search.module.css";

const SearchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0)
    

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search");
    const page = searchParams.get("page");

    useEffect(()=> {
        const fetchSearchMovies = async ()=> {
            try {
                setLoading(true);
                const { data } = await searchMovies(search, page);
                setMovies(prevMovies => data.results?.length ? [...prevMovies, ...data.results] : prevMovies)
                setTotalPages(totalPages => (data.total_pages));
                // console.log(data)
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
    }, [search, page])

    const handleSearch = ({ search }) => {
        setSearchParams({search, page: 1});
        setMovies([]);
        
    }

    const loadMore = () => setSearchParams({search, page: Number(page) + 1});

    const isMovies = Boolean(movies.length);

    const loadMoreBtn = page < totalPages;

    return (
        <>
            <MoviesSearchForm onSubmit={handleSearch} />
            {error && <p className={styles.error}>{error}</p>}
            {loading && <p>...Loading</p>}
            {isMovies && <MoviesSearchList items={movies} />}
            {isMovies && loadMoreBtn && <div className={styles.loadMoreWrapper}>
             <Button onClick={loadMore} type="button">Load more</Button>
            </div>}
        </>
    )
}

export default SearchMovies;