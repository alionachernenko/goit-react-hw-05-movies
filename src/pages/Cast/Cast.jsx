import { getMovieCast } from "services/api"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ActorCard } from "components/ActorCard/ActorCard"

const Cast = () => {
    const [cast, setCast] = useState([])
    const {movieId} = useParams()

    console.log(useParams())
    useEffect(() => {
        getMovieCast(movieId).then(({data}) => {
            setCast(data.cast)
        })
    }, [movieId])
    return(
        <div>
            {cast.length !== 0 ? <ul>
                {cast.map(actor => <ActorCard actor={actor} key={actor.id}/>)}
            </ul> : <p>No info</p>}
        </div>
    )
}

export default Cast
