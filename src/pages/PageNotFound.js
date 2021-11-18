import { useLocation } from 'react-router-dom';

const PageNotFound = () => {

    let location = useLocation();
    console.log(location);

    return (
        <div>
            <h2>404 Page not found</h2>
        </div>
    )
}

export default PageNotFound;