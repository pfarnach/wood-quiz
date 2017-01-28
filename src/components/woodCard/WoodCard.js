import React, { PropTypes } from 'react';

const WoodCard = ({ data, showAnswer }) => {
  return (
    <div className="wood-card">
      <img
        src={ data.img }
        alt={ data.name }
        className="box-shadow"
      />
      { showAnswer &&
        <h2 className="box-shadow">{ data.name }</h2>
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
