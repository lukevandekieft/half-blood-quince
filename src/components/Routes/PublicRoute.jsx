import PropTypes from 'prop-types';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../Widgets/Loader/Loader';

const PublicRoute = ({
  component: Component,
  loadedInitialState,
  user,
  ...otherProps
}) => (
  //If user exists redirect to HomePage, otherwise display component
  <Route exact {...otherProps} render={(props) => {
    if (loadedInitialState) {
      return (
        <Component {...props} />
      );
    } else {
      return (
        <Loader />
      );
    }
  }} />
);

const mapStateToProps = (state) => ({
  loadedInitialState: state.loadedInitialState,
  user: state.user,
});

PublicRoute.propTypes = {
  component: PropTypes.func,
  loadedInitialState: PropTypes.bool,
  user: PropTypes.object,
};

export default withRouter(connect(mapStateToProps)(PublicRoute));
