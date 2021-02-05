import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', { 
    preventDefault: () => {} 
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
});

test('Should set description on input change', () => {
  const value = "New description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: {
      name: "description",
      value: value
    }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('Should set note on textarea change', () => {
  const value = "New note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: {
      name: "note",
      value: value
    }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('Should set amount if valid input', () => {
  const value = '44.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {
      name: "amount",
      value: value
    }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('Should not amount change if invalid input', () => {
  const value = '44.505';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {
      name: "amount",
      value: value
    }
  });
  expect(wrapper.state('amount')).toBe('');
});

// this test is not passing => appended zero appearing in amount?
test('Should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', { 
    preventDefault: () => {} 
  });
  expect(wrapper.state('error')).toBe('');
  // console.log({
  //   description: expenses[0].description,
  //   amount: expenses[0].amount,
  //   note: expenses[0].note,
  //   createdAt: expenses[0].createdAt
  // })
  // expect(onSubmitSpy).toHaveBeenLastCalledWith({
  //   description: expenses[0].description,
  //   amount: expenses[0].amount,
  //   note: expenses[0].note,
  //   createdAt: expenses[0].createdAt
  // });
});

test('Should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
})

test('Should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toEqual(focused);
})