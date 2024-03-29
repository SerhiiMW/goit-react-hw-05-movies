import { useState, useEffect, useRef, useMemo } from "react";
import { nanoid } from "nanoid";

import styles from "./movies-search-form.module.css";

const MoviesSearchForm = ({ onSubmit }) => {
    const [state, setState] = useState({
        search: "",
    });

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        reset();
    }

    const reset = () => {
        setState({
            search: ""
        });
    }

    const searchId = useMemo(() => nanoid(), []);

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <div className={styles.fieldGroup}>
                <label htmlFor={searchId}></label>
                <input id={searchId} ref={inputRef} value={state.search} onChange={handleChange} required type="text" name="search" />
            </div>
            <button type="submit">Search</button>
        </form>
    )
}


export default MoviesSearchForm;