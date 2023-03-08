import { Card, Portrait } from './ActorCard.styled'
import PropTypes from 'prop-types';
import placeholder from '../../images/placeholder.png'
export const ActorCard = ({actor}) => {
    const {profile_path, name} = actor

    return(
        <Card>
            <Portrait src={profile_path ? `https://image.tmdb.org/t/p/original/${profile_path} ` : placeholder} alt={`${name} portrait`} />
            <p>{name}</p>
        </Card>
    )
}

ActorCard.propTypes = {
    actor: PropTypes.object.isRequired,
}