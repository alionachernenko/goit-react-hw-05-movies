import { useEffect, useState, Suspense } from "react"
import { Link, Outlet, useParams, useLocation} from "react-router-dom"
import { getMovieById } from "services/api"

import { Info, Poster, Meta, Tab, Tabs, Genres } from "./About.styled"

const About = () => {
    
    const [title, setTitle] = useState('')
    const [posterLink, setPosterLink] = useState('')
    const [overview, setOverview] = useState('')
    const [genres, setGenres] = useState([])
    const [year, setYear] = useState([])
    const [backLink, setBackLink] = useState(null)
    const location = useLocation()
    const {movieId} = useParams()

    useEffect(() => {
        if(backLink) return

        setBackLink(location.state?.from ?? '/')
    }, [backLink, location.state?.from])


    useEffect(() => {
        getMovieById(movieId).then(({data}) => {
            const {title, poster_path, overview, genres, release_date} = data

            setTitle(title)
            setPosterLink(poster_path)
            setOverview(overview)
            setGenres(genres)
            setYear(release_date.slice(0, 4))
        })                                                                  
    }, [movieId])

    return(
        <div>
            <Link to={backLink}>Back to products</Link>
            <Info>
            <Poster src={`https://image.tmdb.org/t/p/original/${posterLink}`} alt={`${title} poster`} />
            <Meta>
                {title && <h1>{title}</h1>}
                {year && <p>{year}</p>}
                {overview && 
                <>
                    <h3>Overview:</h3>
                    <p>{overview}</p>
                </>}
                {genres.length !== 0 && <> <h3>Genres:</h3>
                <Genres>
                    {genres.map(({name, id}) => <li key={id}>{name}</li>)}
                </Genres></> }
            </Meta>
            </Info>
            <Tabs>
                <Tab to={`/movies/${movieId}/cast`}>Cast</Tab>
                <Tab to={`/movies/${movieId}/reviews`}>Reviews</Tab>
            </Tabs>
            <Suspense fallback={<p>Loading page</p>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default About

