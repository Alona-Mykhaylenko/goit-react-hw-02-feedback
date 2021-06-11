import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ addGood, addNeutral, addBad }) => (
  <div>
    <button type="button" onClick={addGood}>
      Good
    </button>
    <button type="button" onClick={addNeutral}>
      Neutral
    </button>
    <button type="button" onClick={addBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  addGood: PropTypes.func.isRequired,
  addNeutral: PropTypes.func.isRequired,
  addBad: PropTypes.func.isRequired,
};
