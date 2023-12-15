import { useState } from "react";
import css from './SearchBar.module.css'

export const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }


    const handleSubmit = (e) => {
        if (!query) {
        alert("Enter your search term")
        return
    }
        e.preventDefault()
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