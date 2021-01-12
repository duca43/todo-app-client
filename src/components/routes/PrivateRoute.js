import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { loggedTokenSelector } from '../../store/user/selectors'

const PrivateRoute = ({component: Component, ...rest}) => {

    const token = useSelector(loggedTokenSelector);

    return (
        <Route { ...rest } render={props => (!token ? <Redirect to="/" /> : <Component { ...props } />)} />
    );
};

export default PrivateRoute;