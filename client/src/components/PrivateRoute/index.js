import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {isAuth} from "../../lib/authentication";
import {useSelector} from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
    const auth = useSelector(s => s.user.auth)

    return (
        <Route
            {...rest}
            render={({ location }) =>
               auth ? (
                    <Component/>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signup",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute