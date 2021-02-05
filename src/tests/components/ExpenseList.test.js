import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

// don't want props to come from the store
// provide expenses/data directly | UNCONNECTED
// export NAMED => export const ExpenseList

test("Should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
})

test("Should render ExpenseList with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
})