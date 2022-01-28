import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import propTypes from 'prop-types';
const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/auth/login" />)
            )}

        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: propTypes.bool.isRequired,
}

export default PrivateRoute
