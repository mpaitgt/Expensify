import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/config-store';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 100 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1000, createdAt: 200 }))
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 50 }))
store.dispatch(sortByAmount())

// store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
// })

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  jsx, 
  document.getElementById('app')
);