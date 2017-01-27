import React, { PropTypes } from 'react';

const GameInputs = (props) => {
  const { showAnswer, guessInput, isLastCard, nextCard, submitAnswer, updateInput } = props;

  return (
    <form>
      <input
        type="text"
        placeholder="Enter a guess..."
        value={ guessInput }
        onChange={ updateInput }
        disabled={ showAnswer }
      />
      <button
        type="submit"
        onClick={ submitAnswer }
        disabled={ showAnswer }
      >
        Guess
      </button>
      { !isLastCard &&
        <button onClick={ nextCard }>Next</button>
      }
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
