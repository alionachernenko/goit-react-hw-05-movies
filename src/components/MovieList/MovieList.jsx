import { List } from "./MovieList.styled"
import { MovieCard } from "components/MovieCard/MovieCard"
import PropTypes, { object } from 'prop-types';

export const MovieList = ({movies}) => { 
    return (
        <List>
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </List>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(object).isRequired
}