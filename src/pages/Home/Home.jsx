import { useEffect, useState } from "react"
import { getTrendingMovies } from "services/api"
import { MovieList } from "components/MovieList/MovieList"

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getTrendingMovies().then(({data}) => {
            setMovies(data.results)
        })
    }, [])
    return (
        <>
            <h1>Trending:</h1>
            <MovieList movies={movies}/>
        </>
    )
}

export default Home