import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newUserLogout } from '../../../actions';

import NavButton from '../NavButton/NavButton';

function MenuModal(props) {
  const { dispatch, mainMenuShowing, onToggleMenu } = props;

  //Logout current user & close modal
  const handleLogout = () => {
    dispatch(newUserLogout());
    onToggleMenu(mainMenuShowing);
  };

  //Close modal on click and create new recipe if going to 'edit-recipe' route
  const handleRoute = () => {
    onToggleMenu(mainMenuShowing);
  };

  return (
    <div className={props.mainMenuShowing ? 'menuModal modal-open-style' : 'menuModal'}>
      <div className='modal-top'>
        <i className='material-icons' onClick={() => {props.onToggleMenu(props.mainMenuShowing);}} tabIndex="0">close</i>
      </div>
      <div className='modal-body'>
        <div className='accordion-list'>
          <div className='accordion-footer'>
            { (!props.user.uid || props.user.guestUser) && (
              <div onClick={() => {handleRoute();}}>
                <NavButton
                  linkPath='/login'
                  linkText='Login'
                  color='white'
                />
              </div>
            )}
            { (props.user.uid && !props.user.guestUser) && (
              <React.Fragment>
                <div onClick={() => {handleRoute();}}>
                  <NavButton
                    linkPath='/'
                    linkText='View Recipes'
                    color='white'
                  />
                </div>
                <div onClick={() => {handleRoute();}}>
                  <NavButton
                    linkPath='/discover-recipes'
                    linkText='Discover Recipes'
                    color='white'
                  />
                </div>
                <div onClick={() => {handleRoute();}}>
                  <NavButton
                    linkPath='/add-recipe'
                    linkText='Add Recipe'
                    color='white'
                  />
                </div>
                <div onClick={() => {handleLogout();}}>
                  <NavButton
                    linkPath='/login'
                    linkText='Logout'
                    color='white'
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mainMenuShowing: state.mainMenuShowing,
    user: state.user,
  };
};

MenuModal.propTypes = {
  mainMenuShowing: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  user: PropTypes.any,
};

export default connect(mapStateToProps)(MenuModal);