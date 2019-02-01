import React from 'react';
import PropTypes from 'prop-types';

function DirectionsDisplay(props){
  let formattedDirectionsNotes;
  if (props.directionsNotes) {
    formattedDirectionsNotes = props.directionsNotes;
  } else {
    formattedDirectionsNotes = [];
  }

  let formattedDirections;
  if (props.directions) {
    formattedDirections = props.directions;
  } else {
    formattedDirections = [];
  }

  return (
    <div>
      <h3>Directions</h3>
      <ol>
        {formattedDirections.map(index => {
          return <li key={index} className="recipeDetailList">{index}</li>
        })}
      </ol>
      <h3>Direction Notes</h3>
      <ul>
        {formattedDirectionsNotes.map(index => {
          return <li key={index} className="recipeDetailList">{index}</li>
        })}
      </ul>
    </div>
  );
}

DirectionsDisplay.propTypes = {
  directions: PropTypes.array,
  directionsNotes: PropTypes.array
}

export default DirectionsDisplay;
