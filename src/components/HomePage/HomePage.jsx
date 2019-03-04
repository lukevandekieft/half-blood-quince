import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCurrentRecipe, updateSearchValue } from '../../actions';
import { v4 } from 'uuid';

import NavButton from '../Widgets/NavButton';
import RecipeList from './RecipeList';
import SearchBar from '../Widgets/SearchBar/SearchBar';

class HomePage extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  componentWillUnmount() {
    this.props.dispatch(updateSearchValue(null));
  };

  render() {
    const {dispatch, currentRecipe, loadedInitialState, recipes, searchValue, user } = this.props;

    const handleRecipeClick = () => {
      const newId = v4();
      console.log(newId);
      dispatch(changeCurrentRecipe(newId, user));
    };

    let headerMessage;
    if (searchValue) {
      headerMessage = 'Search Results:';
    } else {
      headerMessage = 'Current Recipes';
    }

    const loadingRecipe = loadedInitialState;
    let domDisplay;
    if(loadingRecipe === false) {
      domDisplay =
      <div className='loading'>
        <div className='loaderHome'></div>
      </div>
    } else {
      domDisplay =
      <div className='pageContentSection homepage'>
        <h1 className='headline'>{headerMessage}</h1>
        <RecipeList
          recipes={recipes}
          currentRecipe={currentRecipe}
          searchValue={searchValue}
        />
        <div onClick={() => {handleRecipeClick()}}>
          <NavButton
          linkPath='/edit-recipe'
          linkText='Add Recipe'
          />
        </div>
      </div>
    }
    return (
      <div className='homePageContainer'>
        <div className='headerSection'>
          <SearchBar />
        </div>
        {domDisplay}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentRecipe: state.currentRecipeId,
    loadedInitialState: state.loadedInitialState,
    recipes: state.recipes,
    searchValue: state.searchValue,
    user: state.user,
  };
};

HomePage.propTypes = {
  currentRecipe: PropTypes.string,
  loadedInitialState: PropTypes.any,
  recipes: PropTypes.object,
  searchValue: PropTypes.any,
  user: PropTypes.any,

}

export default connect(mapStateToProps)(HomePage);
