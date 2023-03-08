import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "services/api"

import { ReviewCard } from "components/ReviewCard/ReviewCard"

const Reviews = () => {
    const {movieId} = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReviews(movieId).then(({data}) => {
            setReviews(data.results)
        })
    }, [movieId])
    return (
        <div>
           {reviews.length === 0 ? <p>No reviews</p> : <ul>
                {reviews.map(review =>
                <ReviewCard review={review} key={review.id}/>)
                }
            </ul>} 
        </div>
    )
}

export default Reviews
