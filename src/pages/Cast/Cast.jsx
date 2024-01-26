import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { getMoviesByIdCast } from "../../api/movies";

import styles from './cast.module.css'

const Cast = ()=> {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();

    // const id = '504949'
    useEffect(()=> {
        const fetchCast = async()=> {
            try {
                setLoading(true);
                const {data} = await getMoviesByIdCast(id);
                setCast(data.cast);
                // console.log(data)
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchCast();
    }, []);

    const elements = cast.map(({id, name, character, profile_path}) => <li key={id}>
                                                                        <img className={styles.imgCast} src={profile_path} alt="" />
                                                                        <h4>{name}</h4>
                                                                        <p>{character}</p>                                                       
                                                                        </li>)

    const isCast = Boolean(cast.length);

    return (
        <>
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {isCast && <ol>{elements}</ol>}
        </>
        
    )
}

export default Cast;