import { useState } from "react";



export const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value)
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
                <form  onSubmit={handleSubmit}>
                    <button type="submit">
                    <span>Search</span>
                    </button>
                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                        value={query}
                    />
                </form>
            </header>
        )
}