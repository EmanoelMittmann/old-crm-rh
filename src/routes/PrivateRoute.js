import { Redirect } from 'react-router';
import { Route } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ( { component: Component, ...rest} ) => {
    const state = useSelector(state => state)

    const responseAuth = true;
    
    
    return(
        <Route {...rest} render={props => responseAuth ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location }}}/>
        )}/>
    )
    
}

export default PrivateRoute;