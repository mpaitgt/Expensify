import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should setup default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
})

test('Should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

test('Should add expense', () => {
  const expense = {
    id: '4',
    description: 'MR longsleeve shirt',
    note: '',
    amount: 3000, 
    createdAt: 4
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('Should edit expense', () => {
  const amount = 2800;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].amount).toEqual(amount);
})

test('Should not edit expense if not found', () => {
  const amount = 2800;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})
