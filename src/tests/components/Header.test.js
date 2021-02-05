import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('Should render header correctly', () => {
  const wrapper = shallow(<Header />);
  // expect(wrapper.find('h1').length).toBe(1);
  // expect(wrapper.find('h1').text()).toBe('Expensify');
  expect(toJSON(wrapper)).toMatchSnapshot();
})