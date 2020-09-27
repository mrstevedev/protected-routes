import React from "react";
import { Route, Redirect } from 'react-router-dom';
import auth from './utils/isAuthenticated';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
      <Route
        {...rest}
        render={(props) => 
           auth.isAuthenticated ? ( // Ternary can be any kind of data
                <Component {...props} />
           ) : (
               <Redirect to='/' />
           )
        } />
  );
};

export default PrivateRoute;
