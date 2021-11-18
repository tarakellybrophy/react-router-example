import { Link } from 'react-router-dom';

const Movies = () => {
    return (
        <div>
            <h2>All Movies</h2>

            <p><Link to={`/movies/1`}>Movie 1</Link></p>
            <p><Link to={`/movies/2`}>Movie 2</Link></p>
            <p><Link to={`/movies/3`}>Movie 3</Link></p>
            <p><Link to={`/movies/4`}>Movie 4</Link></p>
        </div>
    )
}

export default Movies;