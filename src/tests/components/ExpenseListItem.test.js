import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

// Render ExpenseListItem with one of fixture expenses
// Create snapshot
test("Should render ExpenseListItem with a fixture expense", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
})