import React, { PropTypes } from 'react';

const WoodCard = ({ data, showAnswer }) => {
  return (
    <div className="wood-card">
      <img src={ data.img } alt={ data.name } />
      { showAnswer &&
        <div>{ data.name }</div>
      }
    </div>
  );
};

WoodCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  showAnswer: PropTypes.bool
};

WoodCard.defaultProps = {
  data: {},
  showAnswer: false
};

export default WoodCard;
