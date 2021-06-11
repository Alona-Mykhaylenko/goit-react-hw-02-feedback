import React from "react";
import PropTypes from "prop-types";

const Statistics = ({
  good,
  neutral,
  bad,
  totalCount,
  positiveFeedbackPercent,
}) => (
  <div>
    <ul>
      <li>
        <span>Good: </span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral: </span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad: </span>
        <span>{bad}</span>
      </li>
      <li>
        <span>Total: </span>
        <span>{totalCount}</span>
      </li>
      <li>
        <span>Positive feedback: </span>
        <span>
          {Number.isNaN(positiveFeedbackPercent)
            ? "0"
            : positiveFeedbackPercent}
          {"%"}
        </span>
      </li>
    </ul>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  positiveFeedbackPercent: PropTypes.number.isRequired,
};
