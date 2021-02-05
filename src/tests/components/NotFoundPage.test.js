import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('Should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});