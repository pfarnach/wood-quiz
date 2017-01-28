import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import GameInputs from './GameInputs';

describe('<GameInputs />', () => {
  const props = {};

  beforeEach(() => {
    props.guessInput = '';
    props.nextCard = sinon.spy();
    props.submitAnswer = sinon.spy();
    props.updateInput = sinon.spy();
  });

  it('should render', () => {
    const wrapper = shallow(<GameInputs { ...props } />);
    expect(wrapper).to.have.length(1);
  });

  it('should update the input value when text is entered', () => {
    const wrapper = shallow(<GameInputs { ...props } />);

    wrapper.find('input[type="text"]').simulate('change');

    expect(props.updateInput.callCount).to.equal(1);
  });

  it('should not render next button on last card', () => {
    const newProps = Object.assign({}, props, { isLastCard: true });
    const wrapper = shallow(<GameInputs { ...newProps } />);

    const buttons = wrapper.find('button');
    expect(buttons).to.have.length(1);
  });

  it('should not render anything if game is over', () => {
    const newProps = Object.assign({}, props, { isLastCard: true, showAnswer: true });
    const wrapper = shallow(<GameInputs { ...newProps } />);

    expect(wrapper.type()).to.equal(null);
  });
});
