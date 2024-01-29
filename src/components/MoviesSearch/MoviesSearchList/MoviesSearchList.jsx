import { Link, useLocation } from "react-router-dom";

import styles from "./movies-search-list.module.css";

const MoviesSearchList = ({items}) => {
    const location = useLocation();

    const elements = items.map(({ id, original_title}) => (<li key={id} className={styles.item}>
                                                                <Link to={`/movies/${id}`} state={{from: location}}>{original_title}</Link>
                                                            </li>));

    return (
        (<ul className={styles.list}>
            {elements}
        </ul>)
    )
}

export default MoviesSearchList;