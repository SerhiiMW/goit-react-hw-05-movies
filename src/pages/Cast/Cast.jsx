import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { getMoviesByIdCast } from "../../api/movies";

import styles from './cast.module.css'

const Cast = ()=> {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();
    useEffect(()=> {
        const fetchCast = async()=> {
            try {
                setLoading(true);
                const {data} = await getMoviesByIdCast(id);
                setCast(data.cast);
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchCast();
    }, [id]);

    const elements = cast.map(({id, name, character, profile_path}) => <li key={id}>
                                                                        <img className={styles.imgCast} src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={name} />
                                                                        <h4>{name}</h4>
                                                                        <p>Character: {character}</p>                                                       
                                                                        </li>)

    const isCast = Boolean(cast.length);

    return (
        <>
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {isCast && <ul className={styles.castList}>{elements}</ul>}
        </>
        
    )
}

export default Cast;