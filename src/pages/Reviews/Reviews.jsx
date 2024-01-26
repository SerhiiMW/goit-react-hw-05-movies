import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { getMoviesByIdReviews } from "../../api/movies";

import styles from './reviews.module.css'

const Reviews = ()=> {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();

    // const id = '504949'
    useEffect(()=> {
        const fetchReviews = async()=> {
            try {
                setLoading(true);
                const {data} = await getMoviesByIdReviews(id);
                setReviews(data.results);
                // console.log(data)
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, []);

    const elements = reviews.map(({id, author, content}) => <li key={id}>
                                                                        <h4>{author}</h4>
                                                                        <p>{content}</p>                                                       
                                                                        </li>)

    const isCast = Boolean(reviews.length);

    return (
        <>
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {isCast && <ol>{elements}</ol>}
        </>
        
    )
}

export default Reviews;