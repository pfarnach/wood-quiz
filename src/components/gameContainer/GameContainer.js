import React, { Component } from 'react';

import data from '../../woodData';
import WoodCard from '../woodCard/WoodCard';
import GameInputs from '../gameInputs/GameInputs';

class GameContainer extends Component {
  state = {
    currentWoodIdx: 0,
    guessInput: '',
    showAnswer: false,
    correctAnswer: false,
    isLastCard: false,
    answersCorrect: 0
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({ guessInput: e.target.value });
  }

  submitAnswer(e) {
    e.preventDefault();
    const { guessInput, currentWoodIdx, answersCorrect } = this.state;

    if (data[currentWoodIdx].acceptedNames.includes(guessInput.toLowerCase())) {
      this.setState({
        showAnswer: true,
        correctAnswer: true,
        answersCorrect: answersCorrect + 1
      });
    } else {
      this.setState({
        showAnswer: true,
        correctAnswer: false
      });
    }
  }

  nextCard(e) {
    e.preventDefault();
    const nextIdx = this.state.currentWoodIdx + 1;

    this.setState({
      currentWoodIdx: nextIdx,
      showAnswer: false,
      guessInput: ''
    });

    if (nextIdx + 1 >= data.length) {
      this.setState({ isLastCard: true });
    }
  }

  renderAnswerMsg() {
    const { showAnswer, correctAnswer } = this.state;

    if (!showAnswer) {
      return '';
    }
    return correctAnswer ? 'Correct!' : 'Wrong!';
  }

  renderFinalScore() {
    const { showAnswer, isLastCard, answersCorrect } = this.state;

    return isLastCard && showAnswer ? <h3>Your final score is { answersCorrect }/{ data.length }</h3> : '';
  }

  render() {
    const { currentWoodIdx, guessInput, showAnswer, isLastCard } = this.state;

    return (
      <div className="game-container">
        <div>
          <WoodCard data={ data[currentWoodIdx] } showAnswer={ showAnswer } />
        </div>
        <div className="answer-msg">
          <div>
            { this.renderAnswerMsg() }
          </div>
          <div>
            { this.renderFinalScore() }
          </div>
        </div>
        <GameInputs
          showAnswer={ showAnswer }
          isLastCard={ isLastCard }
          guessInput={ guessInput }
          nextCard={ this.nextCard.bind(this) }
          submitAnswer={ this.submitAnswer.bind(this) }
          updateInput={ this.updateInput.bind(this) }
        />
      </div>
    );
  }
}

export default GameContainer;
