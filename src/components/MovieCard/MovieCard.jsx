import { Link, useLocation } from "react-router-dom"
import { Card, Poster, Title } from "./MovieCard.styled"
import placeholder from '../../images/placeholder.png'
import PropTypes from 'prop-types';
export const MovieCard = ({movie}) => {
    const location = useLocation()
    const {poster_path, name, title, id} = movie

    return (
            <Card>
                <Link to={`/movies/${id}`} state={{ from: location }} style={{textDecoration: 'none'}}>
                    <Poster src={poster_path !== null ? `https://image.tmdb.org/t/p/original/${poster_path}` : placeholder} alt={`${name} poster`} />
                    <Title>{name ? name : title}</Title>
                </Link>
            </Card>
    )
}

MovieCard.propTypes ={
    movie: PropTypes.object.isRequired
}