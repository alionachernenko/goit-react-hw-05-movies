import { MovieList } from "components/MovieList/MovieList"
import { SearchForm } from "components/SearchForm/SearchForm"

import { useEffect, useState } from "react"
import { getMovieBySearchQuery } from "services/api"
import { useSearchParams } from "react-router-dom"

const Movies = () => {
    const [searchResults, setSearchResults] = useState()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const movieTitle = searchParams.get('query')

        if(movieTitle) getMovieBySearchQuery(movieTitle).then(({data}) => {
            setSearchResults(data.results)
        })
    }, [searchParams])

    const onFormSubmit = (e, query) => { 
        e.preventDefault()

        setSearchParams(query !== '' ? {query: query.trim()} : {})

        getMovieBySearchQuery(query.trim()).then(({data}) => {
            setSearchResults(data.results)
        })
    }

    return(
        <>
        <SearchForm onSubmit={onFormSubmit}/>
        {searchResults && <MovieList movies={searchResults}/>}
        </>
    )
}

export default Movies