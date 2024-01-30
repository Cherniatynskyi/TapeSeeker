import { useState } from "react";
import css from './SearchBar.module.css'
import Notiflix from 'notiflix';
import { IoSearch } from "react-icons/io5";

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
        setQuery('')
    }

  
        return (
                <form className={css.form} onSubmit={handleSubmit} >
                    <button className={css.formButton} type="submit">
                    <IoSearch size="1.3em"/>
                    </button>
                    <input
                        className={css.input}
                        type="text"
                        placeholder="Search movies"
                        onChange={handleChange}
                        value={query}
                    />
                </form>
        )
}