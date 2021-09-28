import { Redirect } from 'react-router';
import { Route } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ( { component: Component, ...rest} ) => {
    const state = useSelector(state => state)
    console.log(state);
    const responseAuth = state.authentication.responseAuth;
    
    return(
        <Route {...rest} render={props => responseAuth ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location }}}/>
        )}/>
    )
    
}

export default PrivateRoute;