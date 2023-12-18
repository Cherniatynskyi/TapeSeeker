import { useState } from "react";
import css from './SearchBar.module.css'
import Notiflix from 'notiflix';

export const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!query) {
        Notiflix.Notify.failure('Enter your search term')
        return
    }
        onSubmit({query})
    }

  
        return (
            <header >
                <form className={css.form} onSubmit={handleSubmit}>
                    <button className={css.formButton} type="submit">
                    <span>Search</span>
                    </button>
                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                        onChange={handleChange}
                        value={query}
                    />
                </form>
            </header>
        )
}