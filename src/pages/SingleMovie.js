import { useParams } from 'react-router-dom'

const SingleMovie = () => {

    let {id} = useParams()

    return (
        <div>
            <h2>Single Movie</h2>

            The movie is movie {id}
        </div>
    )
}

export default SingleMovie;