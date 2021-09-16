import { Redirect } from 'react-router';
import { Route } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRouteHome = ( { component: Component, ...rest} ) => {
    const token = useSelector(state => state)
    return(
        <Route {...rest} render={props => token ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location }}}/>
        )}/>
    )
    
}

export default PrivateRouteHome;