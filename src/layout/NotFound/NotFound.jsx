import {useRouteError} from 'react-router-dom';
import   './NotFound.css';

const NotFound = () => {
    const error = useRouteError();




    return (
        <>
            <div style={{marginTop:"20px",gap:'20px', textAlign:"center", display:'flex',justifyContent:"center",alignItems:"center", flexDirection:'column'}}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has ocuurred.</p>
                <p>
                    <i>{error?.statusText || error?.message}</i>
                </p>


            </div>
        </>

  )
}

export default NotFound
