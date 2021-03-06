import React from 'react';
import PropTypes from 'prop-types';

import DirectionsDisplay from './DirectionsDisplay';
import IngredientsDisplay from './IngredientsDisplay';
import MainRecipeDisplay from './MainRecipeDisplay';
import NavBarBacksplash from '../NavBar/NavBarBacksplash';
import NavButton from '../Widgets/NavButton/NavButton';
import Route404 from '../Route404/Route404';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeRoute } from '../../actions';

class RecipeDetail extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(changeRoute(false));
  }

  //Reset rerouting & popup if page is left
  componentWillUnmount() {
    this.props.dispatch(changeRoute(false));
  }

  render(){
    const {recipes } = this.props;
    const currentRecipe = this.props.location.pathname.slice(8);

    return (
      <React.Fragment>
        { !recipes[currentRecipe] ? (
          <Route404/>
        ) : (
          <div className='contentContainer'>
            <NavBarBacksplash />
            <div className='pageContentSection detailFlex'>
              <MainRecipeDisplay
                author={recipes[currentRecipe].author}
                createdDate={recipes[currentRecipe].createdDate}
                currentRecipe={currentRecipe}
                imageLink={recipes[currentRecipe].imageLink}
                name={recipes[currentRecipe].name}
                rating={recipes[currentRecipe].rating}
                tags={recipes[currentRecipe].tags}
                url={recipes[currentRecipe].url}
                user={this.props.user}
              />
              <div className='directionDisplay'>
                {(!recipes[currentRecipe].ingredients && !recipes[currentRecipe].ingredientsNotes && !recipes[currentRecipe].directions && !recipes[currentRecipe].directionsNotes) && (
                  <div className='emptyContentMessage'>
                    <h2>There's nothing here!</h2>
                    <p>Select <Link to={'/edit-recipe/'}>Edit Recipe</Link> to add ingredients, directions, and notes</p>
                  </div>
                )}
                <IngredientsDisplay
                  ingredients = {recipes[currentRecipe].ingredients}
                  ingredientsNotes = {recipes[currentRecipe].ingredientsNotes}
                />
                <DirectionsDisplay
                  directions = {recipes[currentRecipe].directions}
                  directionsNotes = {recipes[currentRecipe].directionsNotes}
                />
              </div>
              <NavButton
                linkPath='/'
                linkText='Go Back'
              /><div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    user: state.user,
  };
};

RecipeDetail.propTypes = {
  currentRecipe: PropTypes.string,
  recipes: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps)(RecipeDetail);
