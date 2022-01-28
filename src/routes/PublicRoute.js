import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import propTypes from 'prop-types';
const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    console.log(isAuthenticated);
    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Redirect to="/" />)
                    : (<Component {...props} />)
            )}

        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: propTypes.bool.isRequired,
}

export default PublicRoute
