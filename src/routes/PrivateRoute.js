import { Redirect } from 'react-router';
import { Route } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ( { component: Component, ...rest} ) => {  
    const token = JSON.parse(localStorage.getItem('token'))
    
    return(
        <Route {...rest} render={props => token ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location }}}/>
        )}/>
    )
    
}

export default PrivateRoute;