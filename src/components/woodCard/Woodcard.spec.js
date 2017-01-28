import React from 'react';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import WoodCard from './WoodCard';

describe('<WoodCard />', () => {
  const props = {};

  beforeEach(() => {
    props.data = {
      img: 'poplar.jpg',
      name: 'Poplar'
    };
  });

  it('should render', () => {
    const wrapper = shallow(<WoodCard { ...props } />);
    expect(wrapper).to.have.length(1);
  });

  it('should render an image with a specific src', () => {
    const wrapper = shallow(<WoodCard { ...props } />);
    const img = wrapper.find('img[src="poplar.jpg"]');

    expect(img).to.exist;  // eslint-disable-line no-unused-expressions
  });

  it('should render the name when showAnswer is true', () => {
    const newProps = Object.assign({}, props, { showAnswer: true });
    const wrapper = shallow(<WoodCard { ...newProps } />);

    expect(wrapper.find('h2')).to.have.length(1);
  });
});
