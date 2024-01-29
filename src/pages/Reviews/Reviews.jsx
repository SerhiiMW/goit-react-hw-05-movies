import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { getMoviesByIdReviews } from "../../api/movies";

import styles from './reviews.module.css'

const Reviews = ()=> {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();

    useEffect(()=> {
        const fetchReviews = async()=> {
            try {
                setLoading(true);
                const {data} = await getMoviesByIdReviews(id);
                setReviews(data.results);
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, [id]);

    const elements = reviews.map(({id, author, content}) => <li key={id}>
                                                                        <h4>{author}</h4>
                                                                        <p>{content}</p>                                                       
                                                                        </li>)

    const isCast = Boolean(reviews.length);

    return (
        <>
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {isCast ? <ul>{elements}</ul> : <p className={styles.msg}>We don't have any reviews for this movie</p>}
        </>
        
    )
}

export default Reviews;