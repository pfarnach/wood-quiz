import React, { PropTypes } from 'react';

const GameInputs = (props) => {
  const { showAnswer, guessInput, isLastCard, nextCard, submitAnswer, updateInput } = props;

  if (isLastCard && showAnswer) {
    return null;
  }

  return (
    <form className="inputs">
      { !showAnswer &&
        <input
          type="text"
          placeholder="Enter an answer..."
          value={ guessInput }
          onChange={ updateInput }
        />
      }
      <div className="button-group">
        { !showAnswer &&
          <button
            type="submit"
            className="box-shadow"
            onClick={ submitAnswer }
          >
            Submit
          </button>
         }
        { (!isLastCard && showAnswer) &&
          <button className="box-shadow" onClick={ nextCard }>Next</button>
        }
      </div>
    </form>
  );
};

GameInputs.propTypes = {
  showAnswer: PropTypes.bool,
  isLastCard: PropTypes.bool,
  guessInput: PropTypes.string.isRequired,
  nextCard: PropTypes.func.isRequired,
  submitAnswer: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired
};

GameInputs.defaultProps = {
  isLastCard: false,
  showAnswer: false
};

export default GameInputs;
