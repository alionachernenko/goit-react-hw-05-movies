import { Meta, Author } from "./ReviewCard.styled"
import PropTypes from 'prop-types';
export const ReviewCard = ({review}) => {
    const {author, created_at, content} = review
    return(
        <li>
            <Meta>
                <Author>{author}</Author>
                <p>{created_at.slice(0, 10)}</p>
            </Meta>
            <p>{content}</p>
        </li>
    )
}

ReviewCard.propTypes = {
    review: PropTypes.object.isRequired
}