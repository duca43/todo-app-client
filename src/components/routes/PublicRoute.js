import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { loggedTokenSelector } from '../../store/user/selectors'

const PublicRoute = ({component: Component, restricted = false, ...rest}) => {

    const token = useSelector(loggedTokenSelector);

    return (
        <Route { ...rest } render={props => (token && restricted ? <Redirect to="/" /> : <Component { ...props } />)} />
    );
};

export default PublicRoute;